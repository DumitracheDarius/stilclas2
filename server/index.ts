import express, { type Request, Response, NextFunction } from "express";
import cors from "cors";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// CORS configuration for Netlify frontend
app.use(cors({
  origin: [
    'https://stilclas.ro',
    'https://stilclas.netlify.app', // Your Netlify domain
    'http://localhost:3000', // For local development
    'http://localhost:5173', // Vite dev server
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // For backend-only mode, only setup Vite in development
  // In production, we serve API only (frontend hosted on Netlify)
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    // Backend-only mode for production
    app.get('/health', (req, res) => {
      res.json({ status: 'Backend API is running', timestamp: new Date().toISOString() });
    });
    
    // Handle 404 for non-API routes in production
    app.get('*', (req, res) => {
      if (!req.path.startsWith('/api')) {
        res.status(404).json({ 
          message: 'Frontend served from Netlify. API endpoints available at /api/*' 
        });
      }
    });
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();

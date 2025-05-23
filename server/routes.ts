import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

// Reservation form validation schema
const reservationFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 characters" }),
  message: z.string().optional(),
  items: z.array(z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    imageUrl: z.string()
  }))
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real application, you might:
      // 1. Save to a database
      // 2. Send an email
      // 3. Forward to a CRM system
      
      // For now, we'll just simulate success after a short delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      res.status(200).json({
        success: true,
        message: "Your message has been received. We'll get back to you shortly."
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      }
      
      console.error("Contact form error:", error);
      res.status(500).json({
        success: false,
        message: "There was a problem processing your message. Please try again later."
      });
    }
  });

  // Reservation form submission endpoint
  app.post("/api/reservation", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = reservationFormSchema.parse(req.body);
      
      // In a real application, you might:
      // 1. Save reservation to database
      // 2. Send confirmation email to customer
      // 3. Send notification email to business
      // 4. Process payment or payment intent
      
      // For now, we'll simulate success after a short delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      res.status(200).json({
        success: true,
        message: "Your reservation has been received. We'll contact you shortly to confirm your appointment.",
        reservationId: `RES-${Date.now()}`
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      }
      
      console.error("Reservation form error:", error);
      res.status(500).json({
        success: false,
        message: "There was a problem processing your reservation. Please try again later."
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

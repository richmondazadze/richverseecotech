import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Since this is a static site primarily, we're not adding many API routes
  // The main purpose is to serve static assets and the React app

  // Create a reference to express.static
  const staticMiddleware = express.static;
  
  // Serve assets from the public directory
  app.use('/assets', staticMiddleware(path.join(process.cwd(), 'public', 'assets')));

  const httpServer = createServer(app);

  return httpServer;
}

-- Seed script for USA Africa Chamber database
-- Run this after setting up your Vercel Postgres database

-- Insert Chamber data
INSERT INTO "Chamber" (id, name, address, phone, email, website) VALUES 
('chamber-1', 'USA Africa Chamber of Commerce', '158 N. Wacker Drive Suite #4250, Chicago, IL 60605', '0708-473-6983', 'info@usaafricachamber.org', 'https://usaafricachamber.org');

-- Insert Leadership
INSERT INTO "Leadership" (id, name, title, roles, bio, awards, email, "chamberId") VALUES 
('leader-1', 'Gladys Loggin-Folormaio', 'CEO & Founder', ARRAY['CEO', 'Real Estate Broker', 'Community Leader'], 'A visionary leader with over two decades of experience in community development, business incubation, and workforce training. Gladys has dedicated her career to empowering African diaspora communities through strategic partnerships and innovative programs.', ARRAY['2005 Businesswoman of the Year (President Bush)', 'Golden Rule Ambassador', 'Founded 120+ startups', 'Workforce Development Pioneer'], 'gladys@usaafricachamber.org', 'chamber-1');

-- Insert Services
INSERT INTO "Service" (id, category, title, description, programs, "chamberId") VALUES 
('service-1', 'Employment', 'Workforce Development', 'Comprehensive employment services to connect talent with opportunities', ARRAY['Workforce Development', 'Job Training', 'Career Placement', 'Skills Assessment'], 'chamber-1'),
('service-2', 'Financial', 'Financial Literacy Programs', 'Financial literacy and wealth-building programs for sustainable growth', ARRAY['BMO Classes', 'Financial Coaching', 'Credit Building', 'Investment Planning'], 'chamber-1'),
('service-3', 'Business Development', 'Startup Incubation', 'End-to-end support for entrepreneurs and growing businesses', ARRAY['Startup Incubation', 'Mentorship', 'Market Access', 'Trade Facilitation'], 'chamber-1'),
('service-4', 'Education', 'Leadership Training', 'Educational initiatives that build capacity and leadership', ARRAY['Leadership Training', 'Digital Skills', 'Professional Certification', 'Youth Programs'], 'chamber-1'),
('service-5', 'Community', 'Community Building', 'Strengthening bonds within the African diaspora community', ARRAY['Networking Events', 'Cultural Exchange', 'Advocacy', 'Unity Building'], 'chamber-1'),
('service-6', 'Growth', 'Strategic Growth Services', 'Strategic growth services for established organizations', ARRAY['Market Research', 'Strategic Planning', 'Partnership Development', 'Scaling Support'], 'chamber-1');

-- Insert Unity First Event
INSERT INTO "UnityFirstEvent" (id, title, description, date, "endDate", venue, address, capacity) VALUES 
('event-1', 'Unity First Summit 2024', 'The premier gathering of African diaspora leaders, entrepreneurs, and changemakers', '2024-03-15 09:00:00', '2024-03-16 17:00:00', 'Catholic University', 'Catholic University, Washington DC', 500);

-- Insert Tickets
INSERT INTO "Ticket" (id, name, description, price, quantity, "eventId") VALUES 
('ticket-1', 'Summit Pass', 'Complete two-day summit experience', 400.00, 150, 'event-1'),
('ticket-2', 'Business Forum Pass', 'Access to all sessions, lunch and networking reception', 200.00, 200, 'event-1'),
('ticket-3', 'Dinner & Awards Gala', 'Access to dinner gala only', 250.00, 100, 'event-1'),
('ticket-4', 'Exhibitor Pass', 'Exhibitor package with trade show space and networking access', 500.00, 30, 'event-1');

-- Insert Sessions
INSERT INTO "Session" (id, title, description, "startTime", "endTime", speaker, "speakerBio", tags, "eventId") VALUES 
('session-1', 'Opening Keynote: Unity in Action', 'Setting the vision for African diaspora unity and collaboration', '2024-03-15 09:00:00', '2024-03-15 10:30:00', 'Gladys Loggin-Folormaio', 'CEO of USA Africa Chamber of Commerce', ARRAY['Keynote', 'Leadership'], 'event-1'),
('session-2', 'B2B Matchmaking Sessions', 'Structured networking for business partnerships', '2024-03-15 11:00:00', '2024-03-15 12:30:00', 'Multiple Facilitators', 'Business development experts', ARRAY['Networking', 'Business'], 'event-1'),
('session-3', 'Mobilizing Community Leaders', 'Women empowerment and digital skills development', '2024-03-15 14:00:00', '2024-03-15 15:30:00', 'W.E. Da''Cruz', 'Women empowerment advocate', ARRAY['Women Empowerment', 'Digital Skills'], 'event-1'),
('session-4', 'Investment Pitch Competition', 'Startups pitch to panel of investors', '2024-03-15 16:00:00', '2024-03-15 17:30:00', 'Panel of Investors', 'Leading venture capitalists', ARRAY['Startups', 'Funding'], 'event-1');

-- Insert Sponsors
INSERT INTO "Sponsor" (id, name, tier, description, amount, benefits, "eventId") VALUES 
('sponsor-1', 'Unity Partners LLC', 'Unity Partner', 'Premier sponsor of Unity First Summit', 20000.00, ARRAY['Keynote Speaking Slot', '20 Summit Passes', 'Premium Booth Placement', 'Logo on All Materials'], 'event-1'),
('sponsor-2', 'African Development Bank', 'Gold Sponsor', 'Supporting African diaspora development', 10000.00, ARRAY['Panel Speaking Opportunity', '10 Summit Passes', 'Exhibition Booth', 'Digital Marketing Package'], 'event-1'),
('sponsor-3', 'Diaspora Investment Group', 'Silver Sponsor', 'Investing in community growth', 5000.00, ARRAY['5 Summit Passes', 'Logo Recognition', 'Networking Access', 'Social Media Mentions'], 'event-1');

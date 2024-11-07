
// Define the types for the supported services
interface Service {
   domains: string[];
   subdomains: string[];
}

const services: Record<string, Service> = {
   bilibili: {
      domains: ["bilibili.com", "m.bilibili.com"],
      subdomains: ["m"],
   },
   bsky: {
      domains: ["bsky.app"],
      subdomains: [],
   },
   dailymotion: {
      domains: ["dailymotion.com"],
      subdomains: [],
   },
   facebook: {
      domains: ["facebook.com", "fb.watch"],
      subdomains: ["web"],
   },
   instagram: {
      domains: ["instagram.com", "ddinstagram.com"],
      subdomains: [],
   },
   loom: {
      domains: ["loom.com"],
      subdomains: [],
   },
   ok: {
      domains: ["ok.ru"],
      subdomains: [],
   },
   pinterest: {
      domains: ["pinterest.com"],
      subdomains: [],
   },
   reddit: {
      domains: ["reddit.com", "old.reddit.com"],
      subdomains: ["www", "m", "new"],
   },
   rutube: {
      domains: ["rutube.ru"],
      subdomains: [],
   },
   snapchat: {
      domains: ["snapchat.com"],
      subdomains: ["t", "story"],
   },
   soundcloud: {
      domains: ["soundcloud.com"],
      subdomains: ["on", "m"],
   },
   streamable: {
      domains: ["streamable.com"],
      subdomains: [],
   },
   tiktok: {
      domains: ["tiktok.com"],
      subdomains: ["vt", "vm", "m"],
   },
   tumblr: {
      domains: ["tumblr.com"],
      subdomains: ["www", "m"],
   },
   twitch: {
      domains: ["twitch.tv"],
      subdomains: [],
   },
   twitter: {
      domains: ["twitter.com", "x.com", "vxtwitter.com"],
      subdomains: ["mobile"],
   },
   vine: {
      domains: ["vine.co"],
      subdomains: [],
   },
   vimeo: {
      domains: ["vimeo.com"],
      subdomains: ["player"],
   },
   vk: {
      domains: ["vk.com"],
      subdomains: ["m"],
   },
   youtube: {
      domains: [
         "youtube.com",
         "youtube.co.uk",
         "youtube.de",
         "m.youtube.com",
         "music.youtube.com",
         "youtu.be"
      ],
      subdomains: ["music", "m"],
   },
};

// Function to check if a URL matches a supported domain or subdomain
export function isSupportedUrl(url: string): boolean {
   try {
      const urlObj = new URL(url);
      const hostname = urlObj.hostname;

      for (const serviceName in services) {
         const service = services[serviceName];

         // Check if the hostname matches the main domain
         if (service.domains.includes(hostname)) {
            return true;
         }

         // Check if the hostname contains any of the subdomains
         for (const subdomain of service.subdomains) {
            if (hostname.startsWith(subdomain + ".")) {
               return true;
            }
         }
      }

      return false; // No match found
   } catch (error) {
      return false;
   }
}

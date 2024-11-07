export type DownloadStatus =
   | "idle"
   | "preparing"
   | "downloading"
   | "finished"
   | "error";

export type ProgressMessage =
   | "Preparing"
   | "Fetching download url"
   | "Couldn't get the url"
   | "Downloading"
   | "Fetched download url"
   | "The url is not supported"
   | null;

export type mediaDownloaderResponse = {
   uri: string;
   fileSize: number | string;
   fileName: string;
};

export type DownloadModeOption = "auto" | "audio" | "mute";
export type DownloadVideoQuality =
   | "8k+"
   | "4k"
   | "1440p"
   | "1080p"
   | "720p"
   | "480p"
   | "360p"
   | "240p"
   | "144p";
export type DownloadVideoQualityValue =
   | "max"
   | "4320"
   | "2160"
   | "1440"
   | "1080"
   | "720"
   | "480"
   | "360"
   | "240"
   | "144";
export type DownloadVideoCodec = "h264" | "av1" | "vp9";

export type AllowedDomains =
   | "bilibili"
   | "bluesky"
   | "dailymotion"
   | "facebook"
   | "instagram"
   | "loom"
   | "ok"
   | "pinterest"
   | "reddit"
   | "rutube"
   | "snapchat"
   | "soundcloud"
   | "streamable"
   | "tiktok"
   | "tumblr"
   | "twitch"
   | "twitter"
   | "vine"
   | "vimeo"
   | "vk"
   | "youtube";

export type getDownloadUrlResponse = {
   filename: string;
   status: string;
   url: string;
};

export type downloadProgress = {
   isTotalFileSizeGiven: boolean;
   progress: number;
};

export type updateCheckResponse = {
   bugFix: string[];
   displayMessage: boolean;
   newFeatures: string[];
   message: string;
   messageId: string;
   messageTitle: string;
   version: string;
   footNotes: string;
   messageButtonContent: string;
};

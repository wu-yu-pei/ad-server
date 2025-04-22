CREATE TABLE `category` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`desc` varchar(255) NOT NULL,
	`image` varchar(512) NOT NULL,
	`viewCount` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP),
	`updatedAt` timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP),
	CONSTRAINT `category_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `content` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`desc` varchar(255) NOT NULL,
	`image` varchar(512) NOT NULL,
	`viewCount` int NOT NULL DEFAULT 0,
	`content` varchar(1024) NOT NULL,
	`categoryId` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP),
	`updatedAt` timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP),
	CONSTRAINT `content_id` PRIMARY KEY(`id`)
);

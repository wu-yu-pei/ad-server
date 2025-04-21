CREATE TABLE `category` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`desc` varchar(255) NOT NULL,
	`image` varchar(512) NOT NULL,
	`viewCount` int NOT NULL DEFAULT 0,
	`created_at` int NOT NULL DEFAULT 0,
	`updated_at` int NOT NULL DEFAULT 0,
	CONSTRAINT `category_id` PRIMARY KEY(`id`)
);

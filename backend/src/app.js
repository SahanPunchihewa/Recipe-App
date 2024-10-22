import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import responseHandler from "./util/response.handler";
import router from "./api/routes";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(
	"/proxy", // This is the new route that proxies external requests
	createProxyMiddleware({
		target: "https://www.themealdb.com",
		changeOrigin: true,
		pathRewrite: {
			"^/proxy": "", // Removes "/proxy" from the request path before sending to target
		},
	})
);

app.use((req, res, next) => {
	req.handleResponse = responseHandler;
	next();
});

app.use("/api", router);

export default app;

import express from "express";
import login from "./login.route";
import driver from "./driver.route";
import travel from "./travel.route";

const allRoutes = (app: any) => {
  app.use(express.json(), express.urlencoded({ extended: false }));
  app.use(login, driver, travel);
};

export default allRoutes;

import express from "express";
import company from "./company.route";
import user from "./user.route";
import driver from "./driver.route";
import travel from "./travel.route";

const allRoutes = (app: any) => {
  app.use(express.json(), express.urlencoded({ extended: false }));
  app.use(company, user, driver, travel);
};

export default allRoutes;

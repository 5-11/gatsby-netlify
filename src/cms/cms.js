import React from "react";
import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";
import './widgets/filesystem/fs-backend';
// import my homemade widget
import { CustomPathImageControl, CustomPathImagePreview } from "./widgets/customPathImage.js";
// register it to be able tu use it in NetlifyCMS
CMS.registerWidget("custompathimage", CustomPathImageControl, CustomPathImagePreview);
console.log(window.FileSystemBackendClass, 'fs backend');
CMS.registerBackend("file-system", FileSystemBackendClass);
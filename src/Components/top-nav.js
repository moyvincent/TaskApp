import React from "react";
import "../Assests/left-nav.css";
import "../Assests/top-nav.css";
import "./menu-item.js";

const Top_nav = () => {
  const handleMenuItemClick = () => {
    // Menu Routing
  };
  return (
    <nav className="navbar py-4">
      <div className="container">
        <div className="left-top-nav h-right d-flex align-items-center order-1">
          <div className="d-flex">
            <a
              className="nav-link text-primary collapsed bi bi-info-square-fill"
              title="Get Help"
              href="#"
            >
              <i className="icofont-info-square fs-5"></i>
            </a>
            <div className="avatar-list avatar-list-stacked px-3 me-2">
              <img
                className="avatar rounded-circle"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAIAAMFBgcECQL/2gAIAQEAAAAAP2m+MfR7JXVDIEpUXok0N0U9MkOoDIvjXrDwY3AuTe0VvM2H1pn/xAAXAQEBAQEAAAAAAAAAAAAAAAAHBQEC/9oACAECEAAAAMi2uThHCixT/8QAFgEBAQEAAAAAAAAAAAAAAAAABgEF/9oACAEDEAAAALr5FfAVqYz/AP/EADMQAAIBAwIDBQYFBQAAAAAAAAECAwQFBgAREhMhBwgUMVEQIjJBQmEVFyOislJUcaHC/9oACAEBAAE/ANdq2eQdmuBZBmEsSzTUcIWlhbylqZmEcSn7cR3bWV5nlWdXSe8ZVe6q4VUjlgJXPLiB+mJPhRR6DWI5flGEXOC84teaqgqo3BJiciOQD6ZU+F1Poddl2dQdouC2DL1jEU1XCUqYV8oqmFikqj7bjce3vg0dxuPZhabdbIJJ56nJKVeVEN2cJTzyaxfu8ZreKgG8JFaKEOQZZyHlcA/REv8A0Rr8pMVgwWrwmlo94ZEeUVMuxn8Xt0nLf1DXdKoa+39md1tl1p5IJ6fIakGGToyK9PBIPb3ocpOHY7gV1jg55gyqKd4S3DzI0pJ0df36s+ZWW64nR5gJWSglgWSUIjzNC/k6MIwTuh6HV1zCy2zE6zLjI0lBFA0kYdHhaZvJEUSAHdz0Gu7NlT5fj+c3SSHkNPk8kwi34+CN6WFEH7PbmuFYrnln/BMutUddRCZZo0LvG6SKCA6PGVZTqiw3DMG8TZcMpTT0hk580Znln/WICk7ysx8gNVOJYpnLxWTMaPxNCr8+GITywfrqCoPFEynyY6xLD8XwS0/gmJWuOhoTK0zKrvIzyMAC7vISzH2Xq6pabfNWFdyoARPVj0A1W5Neq/jWWsZEb6IvcH+Nx11z46ccyWQR9VVWJA95zwqOvqTsBppCfmdz1Y6osnvdBwLFWM6L9Evv/wCz11Y7tHdbbDWAcJIIZfRh0I1maGS3QIPnUr/E68J9tVFI/LXgEm/Ni+AKTtxjf4vl6/MDXhPtrwn21hiGO3Tqf7hv4jX/xAAkEQACAQMCBwEBAAAAAAAAAAABAgMABBEFEgYHEyEyUXEUMf/aAAgBAgEBPwAkAEk4Aq616xtnSNHErMwB2dwo95pSGUMpyCMipESRHR/FgQfhrp6at+IP0J0jcbOpvG3++P2o0SONETxVQB8Fcy+ItRt9XXS4LuSG3SBGZY227i/vFNdYgjHWfBdjt3dsjHfFctOItRuNXOlz3ck1u8DsFkYttKes1//EAB8RAQEAAgIDAQEBAAAAAAAAAAECAxEABAUTFBIxUf/aAAgBAwEBPwAFQDa863hO52Iu6j1hKn6/q8RlZTSciqi5uXVSic+vO+Le1632mL9a5d1d1dO6pV54Dr9P5nPmxTeRtBo3oOe/Fvnn+v1PmnPhxTGQsFk1sf8Aef/Z"
                alt="user"
              />
              <img
                className="avatar rounded-circle"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAIAAMFBgcECQL/2gAIAQEAAAAAP2m+MfR7JXVDIEpUXok0N0U9MkOoDIvjXrDwY3AuTe0VvM2H1pn/xAAXAQEBAQEAAAAAAAAAAAAAAAAHBQEC/9oACAECEAAAAMi2uThHCixT/8QAFgEBAQEAAAAAAAAAAAAAAAAABgEF/9oACAEDEAAAALr5FfAVqYz/AP/EADMQAAIBAwIDBQYFBQAAAAAAAAECAwQFBgAREhMhBwgUMVEQIjJBQmEVFyOislJUcaHC/9oACAEBAAE/ANdq2eQdmuBZBmEsSzTUcIWlhbylqZmEcSn7cR3bWV5nlWdXSe8ZVe6q4VUjlgJXPLiB+mJPhRR6DWI5flGEXOC84teaqgqo3BJiciOQD6ZU+F1Poddl2dQdouC2DL1jEU1XCUqYV8oqmFikqj7bjce3vg0dxuPZhabdbIJJ56nJKVeVEN2cJTzyaxfu8ZreKgG8JFaKEOQZZyHlcA/REv8A0Rr8pMVgwWrwmlo94ZEeUVMuxn8Xt0nLf1DXdKoa+39md1tl1p5IJ6fIakGGToyK9PBIPb3ocpOHY7gV1jg55gyqKd4S3DzI0pJ0df36s+ZWW64nR5gJWSglgWSUIjzNC/k6MIwTuh6HV1zCy2zE6zLjI0lBFA0kYdHhaZvJEUSAHdz0Gu7NlT5fj+c3SSHkNPk8kwi34+CN6WFEH7PbmuFYrnln/BMutUddRCZZo0LvG6SKCA6PGVZTqiw3DMG8TZcMpTT0hk580Znln/WICk7ysx8gNVOJYpnLxWTMaPxNCr8+GITywfrqCoPFEynyY6xLD8XwS0/gmJWuOhoTK0zKrvIzyMAC7vISzH2Xq6pabfNWFdyoARPVj0A1W5Neq/jWWsZEb6IvcH+Nx11z46ccyWQR9VVWJA95zwqOvqTsBppCfmdz1Y6osnvdBwLFWM6L9Evv/wCz11Y7tHdbbDWAcJIIZfRh0I1maGS3QIPnUr/E68J9tVFI/LXgEm/Ni+AKTtxjf4vl6/MDXhPtrwn21hiGO3Tqf7hv4jX/xAAkEQACAQMCBwEBAAAAAAAAAAABAgMABBEFEgYHEyEyUXEUMf/aAAgBAgEBPwAkAEk4Aq616xtnSNHErMwB2dwo95pSGUMpyCMipESRHR/FgQfhrp6at+IP0J0jcbOpvG3++P2o0SONETxVQB8Fcy+ItRt9XXS4LuSG3SBGZY227i/vFNdYgjHWfBdjt3dsjHfFctOItRuNXOlz3ck1u8DsFkYttKes1//EAB8RAQEAAgIDAQEBAAAAAAAAAAECAxEABAUTFBIxUf/aAAgBAwEBPwAFQDa863hO52Iu6j1hKn6/q8RlZTSciqi5uXVSic+vO+Le1632mL9a5d1d1dO6pV54Dr9P5nPmxTeRtBo3oOe/Fvnn+v1PmnPhxTGQsFk1sf8Aef/Z"
                alt="user"
              />
              <img
                className="avatar rounded-circle"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAIAAMFBgcECQL/2gAIAQEAAAAAP2m+MfR7JXVDIEpUXok0N0U9MkOoDIvjXrDwY3AuTe0VvM2H1pn/xAAXAQEBAQEAAAAAAAAAAAAAAAAHBQEC/9oACAECEAAAAMi2uThHCixT/8QAFgEBAQEAAAAAAAAAAAAAAAAABgEF/9oACAEDEAAAALr5FfAVqYz/AP/EADMQAAIBAwIDBQYFBQAAAAAAAAECAwQFBgAREhMhBwgUMVEQIjJBQmEVFyOislJUcaHC/9oACAEBAAE/ANdq2eQdmuBZBmEsSzTUcIWlhbylqZmEcSn7cR3bWV5nlWdXSe8ZVe6q4VUjlgJXPLiB+mJPhRR6DWI5flGEXOC84teaqgqo3BJiciOQD6ZU+F1Poddl2dQdouC2DL1jEU1XCUqYV8oqmFikqj7bjce3vg0dxuPZhabdbIJJ56nJKVeVEN2cJTzyaxfu8ZreKgG8JFaKEOQZZyHlcA/REv8A0Rr8pMVgwWrwmlo94ZEeUVMuxn8Xt0nLf1DXdKoa+39md1tl1p5IJ6fIakGGToyK9PBIPb3ocpOHY7gV1jg55gyqKd4S3DzI0pJ0df36s+ZWW64nR5gJWSglgWSUIjzNC/k6MIwTuh6HV1zCy2zE6zLjI0lBFA0kYdHhaZvJEUSAHdz0Gu7NlT5fj+c3SSHkNPk8kwi34+CN6WFEH7PbmuFYrnln/BMutUddRCZZo0LvG6SKCA6PGVZTqiw3DMG8TZcMpTT0hk580Znln/WICk7ysx8gNVOJYpnLxWTMaPxNCr8+GITywfrqCoPFEynyY6xLD8XwS0/gmJWuOhoTK0zKrvIzyMAC7vISzH2Xq6pabfNWFdyoARPVj0A1W5Neq/jWWsZEb6IvcH+Nx11z46ccyWQR9VVWJA95zwqOvqTsBppCfmdz1Y6osnvdBwLFWM6L9Evv/wCz11Y7tHdbbDWAcJIIZfRh0I1maGS3QIPnUr/E68J9tVFI/LXgEm/Ni+AKTtxjf4vl6/MDXhPtrwn21hiGO3Tqf7hv4jX/xAAkEQACAQMCBwEBAAAAAAAAAAABAgMABBEFEgYHEyEyUXEUMf/aAAgBAgEBPwAkAEk4Aq616xtnSNHErMwB2dwo95pSGUMpyCMipESRHR/FgQfhrp6at+IP0J0jcbOpvG3++P2o0SONETxVQB8Fcy+ItRt9XXS4LuSG3SBGZY227i/vFNdYgjHWfBdjt3dsjHfFctOItRuNXOlz3ck1u8DsFkYttKes1//EAB8RAQEAAgIDAQEBAAAAAAAAAAECAxEABAUTFBIxUf/aAAgBAwEBPwAFQDa863hO52Iu6j1hKn6/q8RlZTSciqi5uXVSic+vO+Le1632mL9a5d1d1dO6pV54Dr9P5nPmxTeRtBo3oOe/Fvnn+v1PmnPhxTGQsFk1sf8Aef/Z"
                alt="user"
              />
              <img
                className="avatar rounded-circle"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAIAAMFBgcECQL/2gAIAQEAAAAAP2m+MfR7JXVDIEpUXok0N0U9MkOoDIvjXrDwY3AuTe0VvM2H1pn/xAAXAQEBAQEAAAAAAAAAAAAAAAAHBQEC/9oACAECEAAAAMi2uThHCixT/8QAFgEBAQEAAAAAAAAAAAAAAAAABgEF/9oACAEDEAAAALr5FfAVqYz/AP/EADMQAAIBAwIDBQYFBQAAAAAAAAECAwQFBgAREhMhBwgUMVEQIjJBQmEVFyOislJUcaHC/9oACAEBAAE/ANdq2eQdmuBZBmEsSzTUcIWlhbylqZmEcSn7cR3bWV5nlWdXSe8ZVe6q4VUjlgJXPLiB+mJPhRR6DWI5flGEXOC84teaqgqo3BJiciOQD6ZU+F1Poddl2dQdouC2DL1jEU1XCUqYV8oqmFikqj7bjce3vg0dxuPZhabdbIJJ56nJKVeVEN2cJTzyaxfu8ZreKgG8JFaKEOQZZyHlcA/REv8A0Rr8pMVgwWrwmlo94ZEeUVMuxn8Xt0nLf1DXdKoa+39md1tl1p5IJ6fIakGGToyK9PBIPb3ocpOHY7gV1jg55gyqKd4S3DzI0pJ0df36s+ZWW64nR5gJWSglgWSUIjzNC/k6MIwTuh6HV1zCy2zE6zLjI0lBFA0kYdHhaZvJEUSAHdz0Gu7NlT5fj+c3SSHkNPk8kwi34+CN6WFEH7PbmuFYrnln/BMutUddRCZZo0LvG6SKCA6PGVZTqiw3DMG8TZcMpTT0hk580Znln/WICk7ysx8gNVOJYpnLxWTMaPxNCr8+GITywfrqCoPFEynyY6xLD8XwS0/gmJWuOhoTK0zKrvIzyMAC7vISzH2Xq6pabfNWFdyoARPVj0A1W5Neq/jWWsZEb6IvcH+Nx11z46ccyWQR9VVWJA95zwqOvqTsBppCfmdz1Y6osnvdBwLFWM6L9Evv/wCz11Y7tHdbbDWAcJIIZfRh0I1maGS3QIPnUr/E68J9tVFI/LXgEm/Ni+AKTtxjf4vl6/MDXhPtrwn21hiGO3Tqf7hv4jX/xAAkEQACAQMCBwEBAAAAAAAAAAABAgMABBEFEgYHEyEyUXEUMf/aAAgBAgEBPwAkAEk4Aq616xtnSNHErMwB2dwo95pSGUMpyCMipESRHR/FgQfhrp6at+IP0J0jcbOpvG3++P2o0SONETxVQB8Fcy+ItRt9XXS4LuSG3SBGZY227i/vFNdYgjHWfBdjt3dsjHfFctOItRuNXOlz3ck1u8DsFkYttKes1//EAB8RAQEAAgIDAQEBAAAAAAAAAAECAxEABAUTFBIxUf/aAAgBAwEBPwAFQDa863hO52Iu6j1hKn6/q8RlZTSciqi5uXVSic+vO+Le1632mL9a5d1d1dO6pV54Dr9P5nPmxTeRtBo3oOe/Fvnn+v1PmnPhxTGQsFk1sf8Aef/Z"
                alt="user"
              />
              <img
                className="avatar rounded-circle"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAIAAMFBgcECQL/2gAIAQEAAAAAP2m+MfR7JXVDIEpUXok0N0U9MkOoDIvjXrDwY3AuTe0VvM2H1pn/xAAXAQEBAQEAAAAAAAAAAAAAAAAHBQEC/9oACAECEAAAAMi2uThHCixT/8QAFgEBAQEAAAAAAAAAAAAAAAAABgEF/9oACAEDEAAAALr5FfAVqYz/AP/EADMQAAIBAwIDBQYFBQAAAAAAAAECAwQFBgAREhMhBwgUMVEQIjJBQmEVFyOislJUcaHC/9oACAEBAAE/ANdq2eQdmuBZBmEsSzTUcIWlhbylqZmEcSn7cR3bWV5nlWdXSe8ZVe6q4VUjlgJXPLiB+mJPhRR6DWI5flGEXOC84teaqgqo3BJiciOQD6ZU+F1Poddl2dQdouC2DL1jEU1XCUqYV8oqmFikqj7bjce3vg0dxuPZhabdbIJJ56nJKVeVEN2cJTzyaxfu8ZreKgG8JFaKEOQZZyHlcA/REv8A0Rr8pMVgwWrwmlo94ZEeUVMuxn8Xt0nLf1DXdKoa+39md1tl1p5IJ6fIakGGToyK9PBIPb3ocpOHY7gV1jg55gyqKd4S3DzI0pJ0df36s+ZWW64nR5gJWSglgWSUIjzNC/k6MIwTuh6HV1zCy2zE6zLjI0lBFA0kYdHhaZvJEUSAHdz0Gu7NlT5fj+c3SSHkNPk8kwi34+CN6WFEH7PbmuFYrnln/BMutUddRCZZo0LvG6SKCA6PGVZTqiw3DMG8TZcMpTT0hk580Znln/WICk7ysx8gNVOJYpnLxWTMaPxNCr8+GITywfrqCoPFEynyY6xLD8XwS0/gmJWuOhoTK0zKrvIzyMAC7vISzH2Xq6pabfNWFdyoARPVj0A1W5Neq/jWWsZEb6IvcH+Nx11z46ccyWQR9VVWJA95zwqOvqTsBppCfmdz1Y6osnvdBwLFWM6L9Evv/wCz11Y7tHdbbDWAcJIIZfRh0I1maGS3QIPnUr/E68J9tVFI/LXgEm/Ni+AKTtxjf4vl6/MDXhPtrwn21hiGO3Tqf7hv4jX/xAAkEQACAQMCBwEBAAAAAAAAAAABAgMABBEFEgYHEyEyUXEUMf/aAAgBAgEBPwAkAEk4Aq616xtnSNHErMwB2dwo95pSGUMpyCMipESRHR/FgQfhrp6at+IP0J0jcbOpvG3++P2o0SONETxVQB8Fcy+ItRt9XXS4LuSG3SBGZY227i/vFNdYgjHWfBdjt3dsjHfFctOItRuNXOlz3ck1u8DsFkYttKes1//EAB8RAQEAAgIDAQEBAAAAAAAAAAECAxEABAUTFBIxUf/aAAgBAwEBPwAFQDa863hO52Iu6j1hKn6/q8RlZTSciqi5uXVSic+vO+Le1632mL9a5d1d1dO6pV54Dr9P5nPmxTeRtBo3oOe/Fvnn+v1PmnPhxTGQsFk1sf8Aef/Z"
                alt="user"
              />
              <img
                className="avatar rounded-circle"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAIAAMFBgcECQL/2gAIAQEAAAAAP2m+MfR7JXVDIEpUXok0N0U9MkOoDIvjXrDwY3AuTe0VvM2H1pn/xAAXAQEBAQEAAAAAAAAAAAAAAAAHBQEC/9oACAECEAAAAMi2uThHCixT/8QAFgEBAQEAAAAAAAAAAAAAAAAABgEF/9oACAEDEAAAALr5FfAVqYz/AP/EADMQAAIBAwIDBQYFBQAAAAAAAAECAwQFBgAREhMhBwgUMVEQIjJBQmEVFyOislJUcaHC/9oACAEBAAE/ANdq2eQdmuBZBmEsSzTUcIWlhbylqZmEcSn7cR3bWV5nlWdXSe8ZVe6q4VUjlgJXPLiB+mJPhRR6DWI5flGEXOC84teaqgqo3BJiciOQD6ZU+F1Poddl2dQdouC2DL1jEU1XCUqYV8oqmFikqj7bjce3vg0dxuPZhabdbIJJ56nJKVeVEN2cJTzyaxfu8ZreKgG8JFaKEOQZZyHlcA/REv8A0Rr8pMVgwWrwmlo94ZEeUVMuxn8Xt0nLf1DXdKoa+39md1tl1p5IJ6fIakGGToyK9PBIPb3ocpOHY7gV1jg55gyqKd4S3DzI0pJ0df36s+ZWW64nR5gJWSglgWSUIjzNC/k6MIwTuh6HV1zCy2zE6zLjI0lBFA0kYdHhaZvJEUSAHdz0Gu7NlT5fj+c3SSHkNPk8kwi34+CN6WFEH7PbmuFYrnln/BMutUddRCZZo0LvG6SKCA6PGVZTqiw3DMG8TZcMpTT0hk580Znln/WICk7ysx8gNVOJYpnLxWTMaPxNCr8+GITywfrqCoPFEynyY6xLD8XwS0/gmJWuOhoTK0zKrvIzyMAC7vISzH2Xq6pabfNWFdyoARPVj0A1W5Neq/jWWsZEb6IvcH+Nx11z46ccyWQR9VVWJA95zwqOvqTsBppCfmdz1Y6osnvdBwLFWM6L9Evv/wCz11Y7tHdbbDWAcJIIZfRh0I1maGS3QIPnUr/E68J9tVFI/LXgEm/Ni+AKTtxjf4vl6/MDXhPtrwn21hiGO3Tqf7hv4jX/xAAkEQACAQMCBwEBAAAAAAAAAAABAgMABBEFEgYHEyEyUXEUMf/aAAgBAgEBPwAkAEk4Aq616xtnSNHErMwB2dwo95pSGUMpyCMipESRHR/FgQfhrp6at+IP0J0jcbOpvG3++P2o0SONETxVQB8Fcy+ItRt9XXS4LuSG3SBGZY227i/vFNdYgjHWfBdjt3dsjHfFctOItRuNXOlz3ck1u8DsFkYttKes1//EAB8RAQEAAgIDAQEBAAAAAAAAAAECAxEABAUTFBIxUf/aAAgBAwEBPwAFQDa863hO52Iu6j1hKn6/q8RlZTSciqi5uXVSic+vO+Le1632mL9a5d1d1dO6pV54Dr9P5nPmxTeRtBo3oOe/Fvnn+v1PmnPhxTGQsFk1sf8Aef/Z"
                alt="user"
              />
              <span>
                <i class="bi bi-person-fill-add avatar rounded-circle  text-center pointer"></i>
              </span>
            </div>
          </div>
          <div className="notification px-2 px-md-0 dropdown">
            <a
              className="nav-link pulse"
              id="react-aria1287770617-:r0:"
              aria-expanded="false"
            >
              <i class="bi bi-bell-fill fs-5"></i>
            </a>
          </div>
        </div>
        <div className="toggle"></div>
        <div className="search"></div>
      </div>
    </nav>
  );
};

export default Top_nav;

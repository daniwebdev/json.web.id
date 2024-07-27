'use client';

import SwaggerUI from "swagger-ui-react"

import "swagger-ui-react/swagger-ui.css"
import "./swagger.css"
import React from "react";

export function Playground() {
    return (
        <section className="max-w-screen-xl mx-auto">
            <SwaggerUI 
                url="/openapi.yml"
                plugins={[OperationsLayoutPlugin()]} 
                layout="OperationsLayout"
                persistAuthorization={true}
             />
        </section>
    );
}

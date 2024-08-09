'use client'

import SwaggerUI from "swagger-ui-react"
import { OperationsLayoutPlugin } from "@/components/swagger-layouts";
import "swagger-ui-react/swagger-ui.css"
import "./swagger.css"

export function Playground() {
    return (
        <section className="max-w-screen-xl mx-auto px-10">
            <SwaggerUI 
                url="/openapi.yml"
                plugins={[OperationsLayoutPlugin()]} 
                layout="OperationsLayout"
                persistAuthorization={true}
             />
        </section>
    );
}

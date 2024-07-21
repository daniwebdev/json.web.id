'use client';
import SwaggerUI from "swagger-ui-react"

import "swagger-ui-react/swagger-ui.css"
import "./swagger.css"

export function Playground() {
    return (
        <section className="max-w-screen-xl mx-auto">
            <SwaggerUI url="/openapi.yml" persistAuthorization={true} />
        </section>
    );
}
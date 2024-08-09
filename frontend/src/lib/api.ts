import axios, { AxiosInstance } from "axios";

class ApiClient {
    apiKey = "demo-json-123-123";
    private http: AxiosInstance;

    constructor(apiKey: string, resourceName?: string) {
        this.apiKey = apiKey;

        this.http = axios.create({
            baseURL: resourceName ? `https://json.web.id/api/${resourceName}`: `https://json.web.id/api`,
            headers: {
                "x-api-key": this.apiKey
            }
        })
    }


    public async getRecords() {
        const response = await this.http.get("/app");
        return response.data;
    }

    public async getRecord(id: string) {
        const response = await this.http.get(`/${id}`);
        return response.data;
    }

    public async createRecord(record: any) {
        const response = await this.http.post("/", record);
        return response.data;
    }

    public async updateRecord(id: string, record: any) {
        const response = await this.http.put(`/${id}`, record);
        return response.data;
    }

    public async deleteRecord(id: string) {
        const response = await this.http.delete(`/${id}`);
        return response.data;
    }
    
}
import axios, { AxiosInstance } from "axios";

export class ApiClient {
    apiKey = "demo-json-123-123";
    private http: AxiosInstance;

    constructor({apiKey, resourceName}:{apiKey?: string, resourceName?: string}) {
        
        if(apiKey) {
            this.apiKey = apiKey;
        }

        this.http = axios.create({
            baseURL: resourceName ? `https://api.json.web.id/app/${resourceName}`: `https://api.json.web.id`,
            headers: {
                "x-api-key": this.apiKey
            }
        })
    }


    public async getRecords() {
        const response = await this.http.get("/");
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
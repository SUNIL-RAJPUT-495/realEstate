export const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const SummaryApi = {
    // Admin Auth
    adminLogin: {
        url: baseURL + "/api/admin/login",
        method: "post"
    },
    adminSeed: {
        url: baseURL + "/api/admin/seed",
        method: "post"
    },

    // Properties
    addProperty: {
        url: baseURL + "/api/property/add",
        method: "post"
    },
    getProperties: {
        url: baseURL + "/api/property",
        method: "get"
    },
    getPropertyStats: {
        url: baseURL + "/api/property/stats",
        method: "get"
    },
    deleteProperty: (id) => ({
        url: baseURL + `/api/property/${id}`,
        method: "delete"
    }),
}

export default SummaryApi

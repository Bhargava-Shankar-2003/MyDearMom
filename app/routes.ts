import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("post/one-year","routes/06092025.tsx")
    
] satisfies RouteConfig;

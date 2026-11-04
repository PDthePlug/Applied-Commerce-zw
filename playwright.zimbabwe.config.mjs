import {defineConfig} from '@playwright/test';
export default defineConfig({
 testDir:'./tests/zimbabwe-browser',timeout:45_000,expect:{timeout:12_000},
 workers:2,retries:process.env.CI?1:0,reporter:[['line']],outputDir:'test-results/zimbabwe-browser',
 use:{baseURL:'http://127.0.0.1:3100',trace:'retain-on-failure'},
 webServer:{command:'npm run start -- -H 127.0.0.1 -p 3100',url:'http://127.0.0.1:3100',timeout:120_000,reuseExistingServer:!process.env.CI,env:{NEXT_PUBLIC_APPLIED_COMMERCE_BACKEND_MODE:'local'}},
 projects:[320,360,430,768,1280,1920].map(width=>({name:`width-${width}`,use:{viewport:{width,height:900}}})),
});

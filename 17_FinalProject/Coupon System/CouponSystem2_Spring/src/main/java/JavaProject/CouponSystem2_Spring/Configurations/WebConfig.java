package JavaProject.CouponSystem2_Spring.Configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Web Configurations for system
 */
@Configuration
public class WebConfig {
    /**
     * Creates a RestTemplate
     * @return RestTemplate object
     */
    @Bean
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurer() {
            public void addCorsMappings(CorsRegistry registry){
                registry.addMapping("/**")
                        .allowedOrigins("*")
                        .allowedMethods("GET","POST","PUT","DELETE")
                        .allowedHeaders("Authorization","Content-Type")
                        .exposedHeaders("Authorization");
            }
        };
    }
}

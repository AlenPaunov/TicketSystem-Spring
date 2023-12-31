package sirma.academy.ticketsystem.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration // add it to bean context
@EnableWebSecurity // Spring to know that here is our Security Context
public class SecurityConfig {
    @Autowired
    private JwtRequestFilter jwtRequestFilter;
    @Bean
    public AuthenticationManager authenticationManager(CustomUserDetailService userDetailsService) throws Exception {
        var authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        authenticationProvider.setUserDetailsService(userDetailsService);
        return new ProviderManager(authenticationProvider);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    // This is our SecurityFilter
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
                .cors().and().csrf().disable()
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/api/public/**").permitAll()
                        .requestMatchers("/api/auth/**").permitAll()
                        .requestMatchers("/api/admin/**").hasAuthority("ADMIN")
                        .requestMatchers("/api/tickets/**").hasAuthority("USER")
                        .anyRequest().authenticated()
                ).addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        // addFilterBefore()
        return http.build();
    }
}

package sirma.academy.ticketsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sirma.academy.ticketsystem.dto.UserLoginDto;
import sirma.academy.ticketsystem.model.User;
import sirma.academy.ticketsystem.dto.UserRegisterDto;
import sirma.academy.ticketsystem.security.CustomUserDetails;
import sirma.academy.ticketsystem.security.JwtUtil;
import sirma.academy.ticketsystem.service.AuthService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private AuthService authService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> register(@RequestBody UserRegisterDto dto) {
        try {
            User user = authService.registerUser(dto);
            return ResponseEntity.ok("User registered successfully");
        } catch (Exception exception) {
            return ResponseEntity.badRequest().body("Could not register");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginDto dto) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getPassword())
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtUtil.generateToken(dto.getEmail());
            Map<String, Object> response = new HashMap<>();
            CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

            response.put("jwt", jwt);
            response.put("user", authentication.getPrincipal());
            return ResponseEntity.ok(response);

        } catch (AuthenticationException exception) {
            return ResponseEntity.badRequest().body("Invalid credentials");
        }

    }

}

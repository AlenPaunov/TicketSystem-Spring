package sirma.academy.ticketsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import sirma.academy.ticketsystem.dto.UserRegisterDto;
import sirma.academy.ticketsystem.model.Role;
import sirma.academy.ticketsystem.model.User;
import sirma.academy.ticketsystem.repository.RoleRepository;
import sirma.academy.ticketsystem.repository.UserRepository;
import sirma.academy.ticketsystem.utils.UserDTOHelper;

import java.util.HashSet;
import java.util.Set;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    public User registerUser(UserRegisterDto dto) {
        dto.setPassword(passwordEncoder.encode(dto.getPassword()));
        // Using mapper example
        // ModelMapper mapper = new ModelMapper();
        // User user = mapper.map(dto, User.class);
        User user = UserDTOHelper.registerDTOToUser(dto);
        Set<Role> roles = new HashSet<>();
        Role role = roleRepository.findByName("USER");
        roles.add(role);
        user.setRoles(roles);
        try {
            userRepository.save(user);
        } catch (Exception exception) {
            throw  exception;
        }

        return user;
    }
}

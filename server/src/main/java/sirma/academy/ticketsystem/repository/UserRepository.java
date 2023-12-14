package sirma.academy.ticketsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sirma.academy.ticketsystem.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
    Boolean existsByEmail(String email);
}

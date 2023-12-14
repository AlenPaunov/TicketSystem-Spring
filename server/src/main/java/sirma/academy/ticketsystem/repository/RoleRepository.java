package sirma.academy.ticketsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sirma.academy.ticketsystem.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);
}

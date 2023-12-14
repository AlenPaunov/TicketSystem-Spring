package sirma.academy.ticketsystem.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

// To understand lombok in IntelliJ install Lombok plugin
// ctrl + alt + s
// Lombok -> install
@Data
@Getter
@Setter
@Entity
@Table(name="roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
}

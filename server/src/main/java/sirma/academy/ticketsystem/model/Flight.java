package sirma.academy.ticketsystem.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name="flights")
public class Flight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String destination; // v2 becomes

    private LocalDateTime departureTime;
    // [1AB] [1CD]
    // [2AB] [2CD]

    // [[][]][[][][][]][[][][][]][][][][][][][]
    // 0010
    // 0000
    // 1111
    // 0000
    // TODO seats - type(Economy, Business)
    // TODO arrivalTime
    // big DRAMA AHEAD - flightPath - MULTIPLE fLIGHTS TO DESTINATION

}

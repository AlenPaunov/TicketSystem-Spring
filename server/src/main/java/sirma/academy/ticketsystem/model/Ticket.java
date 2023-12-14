package sirma.academy.ticketsystem.model;

import jakarta.persistence.*;

@Entity
@Table(name="tickets")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
//    @ManyToMany //when travelling with multiple Flights
    private Flight flight;

    private TicketStatus status;
    private String seat;
    private Double price;

}

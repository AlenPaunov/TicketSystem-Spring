package sirma.academy.ticketsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sirma.academy.ticketsystem.model.Ticket;
import sirma.academy.ticketsystem.model.User;
import sirma.academy.ticketsystem.service.TicketService;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    @Autowired
    private TicketService ticketService;
    @GetMapping
    public ResponseEntity<?> getUserTickets(User user) {
        List<Ticket> tickets = ticketService.getTicketsByUser(user);
        return new ResponseEntity<>(tickets, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        Ticket ticket = ticketService.getById(id);
        return new ResponseEntity<>(ticket, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTicket(@PathVariable Long id) {
        return null;
    }
}

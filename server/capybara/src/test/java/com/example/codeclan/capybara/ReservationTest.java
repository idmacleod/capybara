package com.example.codeclan.capybara;

import com.example.codeclan.capybara.models.Customer;
import com.example.codeclan.capybara.models.Reservation;
import com.example.codeclan.capybara.models.Venue;
import com.example.codeclan.capybara.models.VenueTable;
import com.example.codeclan.capybara.repositories.ICustomerRepository;
import com.example.codeclan.capybara.repositories.IReservationRepository;
import com.example.codeclan.capybara.repositories.IVenueRepository;
import com.example.codeclan.capybara.repositories.IVenueTableRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.time.Month;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class ReservationTest {

    @Autowired
    ICustomerRepository customerRepository;
    @Autowired
    IVenueTableRepository venueTableRepository;
    @Autowired
    IVenueRepository venueRepository;
    @Autowired
    IReservationRepository reservationRepository;

    @Test
    void contextLoads() {
    }

    @Test
    public void createReservationThenSave(){
        Customer customer1 = new Customer("Abby", "Anvil", "111111", "abbyanvil@gmail.com");
        customerRepository.save(customer1);
        Venue venue1 = new Venue("The Empty Venue");
        venueRepository.save(venue1);
        VenueTable venueTable1 = new VenueTable(4, venue1);
        venueTableRepository.save(venueTable1);

        Reservation reservation1 = new Reservation(customer1, venueTable1,
                LocalDateTime.of(2020, Month.AUGUST, 31, 18, 30),
                LocalDateTime.of(2020, Month.AUGUST, 31, 20, 30));
        reservationRepository.save(reservation1);
    }

    @Test
    public void canDeleteReservation(){
        int preDeleteSize = reservationRepository.findAll().size();
        reservationRepository.deleteById(1L);
        int postDeleteSize = reservationRepository.findAll().size();
        assertTrue(preDeleteSize > postDeleteSize);
    }
}
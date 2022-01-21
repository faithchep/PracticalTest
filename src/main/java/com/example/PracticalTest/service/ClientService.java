package com.example.PracticalTest.service;

import com.example.PracticalTest.model.Client;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ClientService {
    public Client saveClient(Client client);
    public List<Client> getAllClients();
}

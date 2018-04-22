package com.emf.emp01.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emf.emp01.model.Employee;
import com.emf.emp01.repository.EmployeeRepository;

@Service
public class EmployeeDAO {

	@Autowired
	EmployeeRepository employeeRepository;
	
	/*to save an employee*/
	public Employee save(Employee emp) {
		return employeeRepository.save(emp);
	}
	
	
	/*search all employees*/
	public List<Employee> findAll() {
		return employeeRepository.findAll();
	}
	
	/*get an employee*/
	public Employee findOne(Long empid) {
		return employeeRepository.getOne(empid);
	}
	
	/*delete an employee*/
	public void delete(Employee emp) {
		employeeRepository.delete(emp);
	}
	
}

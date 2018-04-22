package com.emf.emp01.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.emf.emp01.model.Employee;



public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}

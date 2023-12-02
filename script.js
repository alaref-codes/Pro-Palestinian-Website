const companiesElement = document.getElementById('companies');

fetch('companies.json')
    .then(response => response.json())
    .then(data => {
        const companies = data.companies;
        companies.forEach(company => {
            const companyElement = document.createElement('div');
            companyElement.className = 'company';

            const logoElement = document.createElement('img');
            logoElement.src = company.logoUrl;

            const nameElement = document.createElement('h3');
            nameElement.textContent = company.name;

            companyElement.appendChild(logoElement);
            companyElement.appendChild(nameElement);

            companiesElement.appendChild(companyElement);
        });
    });

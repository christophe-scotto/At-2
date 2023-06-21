[Promo]
    - id (PK)
    - name

[Student]
    - id (PK)
    - first_name
    - last_name
    - github_username
    - promo_id (FK references Promo.id)

[Admin]
    - id (PK)
    - first_name
    - last_name
    - password

[Admin_Permission]
    - id (PK)
    - admin_id (FK references Admin.id)
    - permission_name

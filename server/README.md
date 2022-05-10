# Yeager

The expressjs backend for the Flipr Hackathon XIII project.

## API Endpoints

- `auth`
    - `/login`
        | Method | Description                                                             |
        |--------|-------------------------------------------------------------------------|
        | POST   | Does HTTP Basic scheme authorization and returns a JWT token on success |
    - `/signup`
        | Method | Description                                                                     | Body            |
        |--------|---------------------------------------------------------------------------------|-----------------|
        | POST   | Creates new user account based on the body and returns a JWT token for the user | `SignupRequest` |
- `listing`
    - `/`
        | Method | Description                                                 | Query  |
        |--------|-------------------------------------------------------------|--------|
        | GET    | Returns 20 latest public listings or listing of query `?id` | `[id]` |
        | DELETE | Deletes listing of given id                                 | `id`   |
    - `/new`

        | Method | Description          | Body             |
        |--------|----------------------|------------------|
        | POST   | Creates new listing. | `ListingRequest` |
- `negotiation` 
    - `/`
        | Method | Description                                                                                                                                                                                                                                          | Query  | Body                                   |
        |--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|----------------------------------------|
        | GET    | Returns all negotiations for user or single negotiation with queried ID                                                                                                                                                                              | `[id]` |                                        |
        | POST   | Creates negotiation according to body. Returns negotiation ID on success                                                                                                                                                                             |        | `NegotiationRequst`                    |
        | PATCH  | Based on `type` in query: <br/> - approve: will approve loan and update listing along with all negotiations of listing <br/> - deny: will deny the negotitaion and not mutate anything else. <br/> - update: append a new offer to the negotiations. | `id`   | `NegotiationUpdate` when `type=update` |
- `settings`

- `user`

- `status`

- `upload`



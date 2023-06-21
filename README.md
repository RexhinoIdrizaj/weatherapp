![Version](https://img.shields.io/badge/version-v1.0.0-blue)

# Weather App

### Prerequisites

- Node.js (version >=18.16.0)
- yarn 1.22

### Installation

1. Clone the repository.
2. yarn install
3. yarn run android | yarn run ios

### Tests

- yarn run test

### Release

1. Change version in package.json.
2. Change version in README.md
3. Change versionCode / versionName (Android)
4. Change version / build (IOs)


# [Guidelines](readme/guidelines.md)

# Estimation

- Analyzing the requirements (1h)
- Project mechanics (structure, dependencies, layers, navigation, store, realm, config etc) (4-6h)
- Creating UI components (1h)
- Home screen with cities (2-3h)
- City Details screen (2-3h)
- Tests (1h)
- Make it ready (check linting and build) (1h)

Total 12 - 16 hours. (rough estimation)



# Chosen architecture

The project is build with scalability and flexibility in mind.

- Folder structure: everything is separated in folder depending on the purpose.
- Redux: Even it is a little task and can be done perfectly only using context still redux is integrated to be able to scale if more features are added and to have a centralized store. It has already needed optimizations for state changes.
- Realm: is a lightweight, easy-to-use, and efficient database solution that can seamlessly handle data storage and querying operations while requiring minimal setup and configuration.
- Service Layer: Having in mind modularity, reusability and testability. As we need different services like network one and realm one encapsulating the business logic and exposing a clear interface is the way to go. NOTE: this also 
has room to extract the whole service layer in an internal npm package and used in different project with just giving the configuration from outside. 
- Transformers: Having a service layer the transformers can be useful to decouple the UI layer from business logic. With this approach the UI layer will expose it own interface. It is also easier when having to work with local database.
- Selectors: There is a seperate folder and files selectors to just export them and use. It is easier if you want to change something in the future you don't have to go to each file that uses that state just change things in the selector itself.

# Notes

- In this project are added only some tests just for example (not everything is covered)
- Currently the localization just make use of device choosen language. There is room to implement a select language the config is already there.
- missing realm migrations
- missing storybook integration
- missing Sentry for error logs sending or error boundaries.


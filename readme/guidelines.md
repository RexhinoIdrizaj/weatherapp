# GUIDELINES 

## Branching Model

We follow this workflow for branching and version control:

- The `main` branch contains the stable production-ready code.
- Feature branches are created for each new feature or enhancement (feature/featurenumber-feature-name).
- Bug fixes are done on separate branches derived from `main` (fix/bugnumber-bug-name).

After the work is done a PR is created.

## Definition of Done

Before submitting your pull request, please ensure that your changes meet the following criteria

- The code compiles without errors or warnings.
- Unit tests have been added or updated to cover the changes.
- The code follows the established code conventions and style guidelines.
- Documentation has been updated to reflect the changes, if applicable.

# Naming convention

### Naming a file is done depending on the file purpose. You start by what file it is and than the name of it.

- Screens => Screen*ScreenName*
- UI      => UI*ComponentName*
- Models  => model*Name*
- Icons   => Icon*Name*
- Services   => service*Name*
- Transformers   => transformer*Name*
- [purpose]   => [purpose]*Name*

### Typescript models start with T for faster search through project

- Interface => T*InterfaceName*
- Types     => T*TypeName*
- Enums     => T*EnumName*
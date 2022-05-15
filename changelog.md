# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
## [5.0.0] - 2022-05-15
### Added
* product list was made start component
* ProductViewComponent was added
* Routing was added for Product, Admin, Cart and Order modules
* Order Component  ProcessOrderComponent was added with CanActivate Guard for order when cart is empty
* Admin module was added with canActivate Guard
* Login Page was added to implement getting Admin Role
* A few routing modules were used
* CanDeactivate Guard was added
* Resolver was added
* Local storage was used to keep cart items
### Changed
* angular was upgraded
* bootstrap was added
* rxjs was upgraded
* product list was changed
* cart component was changed

## [4.0.0] - 2022-04-24
### Added
* OrderByPipe was created
* OrderByPipe was declared in SharedModule
* OrderByPipe was used to sort data
### Changed
* Built-in pipes were applied
* getProducts() from ProductService was changed to return promise. 
* async pipe was applied in product-list.component.html to represen+t data from ProductService.
* modules CommonModule, FormsModule were exported from SharedModule
* Замечаний нет

## [3.0.0] - 2022-04-16
### Added
* directive ChangeSizeDirective was added
* services were injected to FirstComponent
* class/token LocalStorageService was added
* service ConfigOptionsService was added
* service/token ConstantsService was added
* service GeneratorService was added
### Changed
* CartService was modified
* genId generator was added to service GeneratorService


## [2.0.0] - 2022-04-05
### Added
* OnChange Hook was added
* ngClass was used
* ChangeDetectionStrategy.OnPush was added
* HighlightDirective was added in SharedModule
* appTitle was added via ngAfterViewInit()
* СartItemComponent was added, @Input(), @Output() decorators were used
* onDeleteItem method was added
* onQuantityIncrease/onQuantityDecrease methods were added
* замечаний нет

### Changed
* CartListComponent was modified
* CartService was modified, totalCost and totalQuantity were added
* ProductComponent was modified
* ProductListComponent was modified 
* project was distributed into few modules

## [1.0.0] - 2022-03-11 
### Added
- New component CartListComponent.
- New component ProductListComponent.
- New service ProductsService.
- New component ProductComponent.
- New class Product.
- New component FirstComponent.

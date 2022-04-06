# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

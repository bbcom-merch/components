# components
A collection of custom elements by [Mike Roberts](https://github.com/robertsmikej)

This README lays out the options available on each element.



## banner.js element options

`data-text-line1`:
* 1st row, 2nd largest text

`data-text-line2`: 
* 2nd row, largest text

`data-text-line3`: 
* 3rd row, 3rd largest text

`data-text-line4`: 
* 4th row, 4th largest text

`data-text-button`:
* text to be displayed on button 
* if empty, no button appears

`data-options-type`:
* options
  * "hero" 
  * "banner"
* if option "banner", extra spacing is added to top and bottom 
* option "hero" is default and will be selected if no text or any text other than "banner" is entered

`data-template-background`:
* options:
  * 1 ![1](https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-01.jpg)
  * 2 ![2](https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-02.jpg)
  * 3 ![3](https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-03.jpg)
  * 4 ![4](https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-04.jpg)
  * 5 ![5](https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-05.jpg)
  * 6 ![6](https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-06.jpg)
  * 7 ![7](https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-07.jpg)
  * 8 ![8](https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-08.jpg)
  * 9 ![9](https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-09.jpg) 
  * 10 ![10](https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-10.jpg)
  * 11 ![11](https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-11.jpg)  
  * birthday ![birthday](https://www.bodybuilding.com/images/2020/april/04-01-customer-apprec-headers-desktop.jpg)
* if left empty, background will revert to `data-image-background-desktop`. if `data-image-background-desktop` is empty, background will revert to `data-color-background`.

`data-image-background-desktop`:
* enter custom image link for desktop

`data-image-background-mobile`:
* enter custom image link for mobile

`data-link`: 
* enter link to follow on click

`data-color-text`:
* options 
  * "black"
  * "white"
  * "blue"
  * "bb-blue"
  * "green"
  * "disabled" 

`data-color-background`:
* options 
  * "black"
  * "white"
  * "blue"
  * "bb-blue"
  * "green"
  * "disabled" 
  
## textheader.js element options:

`data-text-header`:
* Text to appear in element

`data-options-hide-on-desktop`:
* option to show text only on mobile



## grid.js element options:

`data-options-cells-per-row`:
* number of images to be displayed per row of the grid
* choose from 1-6, any other numbers display as 1

`data-options-cells-type`:
* determines how grid treats the grid-cells within it
* options
  * "full" presents the image stretched to fit size requirements, with default background design that will display if image does not load 
  * "full-outer-text" is the same as full, but presents text outside image
  * "full-inner-text" is the same as full, but presents text inside image
  * "product" presents the image with a blue background design
  * "free" presents the image with no background, white border, and scales the image to fit size restrictions from `data-options-cells-per-row`
  * "550" presents the image at full-size with no background, regardless of `data-options-cells-per-row`
  
  
  
## grid-cell.js element options  

`data-image`:
* Image link to display

`data-link`:
* Link to follow on click

`data-text-header-large`:
* First line text, large

`data-text-header-small`:
* Second line text, small

`data-text-para`:
* Thrid line text, paragraph form

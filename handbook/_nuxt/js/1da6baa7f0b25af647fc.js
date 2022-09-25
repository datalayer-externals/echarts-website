(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{358:function(e,t,n){"use strict";n.r(t),t.default='# Intelligent Pointer Snapping\n\nSome interactive elements may be relatively small in charts, so sometimes it is difficult for users to click and do other operations accurately, especially on the mobile. Therefore, in Apache ECharts<sup>TM</sup> 5.4.0, we introduced the concept of "smart pointer snapping".\n\nStarting from this version, by default, ECharts enables pointer snapping for mobile charts and disables it for non-mobile charts.\n\n> If it needs to be enabled for all platforms, it can be achieved by setting `opt.useCoarserPointer` to `true` in [init](${mainSitePath}api.html#echarts.init); set to `false` is turned off for all platforms.\n\n## Snapping Algorithm\n\nWhen a mouse or touch event occurs, ECharts will determine whether it is intersecting with an interactive element based on the position of the mouse or touch. If it is, the element is the object to be interacted with, which is the same logic before this optimization. If not, find an element that is closest to the mouse or touch position within a certain range.\n\n> The default range is 44px (see [W3C standard](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)), developers can set this value through `opt.pointerSize` when [init](${mainSitePath}api.html#echarts.init).\n\nMore specifically, ECharts will loop through different angles and different radii (within `opt.pointerSize`) around the mouse or touch position until it finds an element that intersects it. If found, the element is considered to be the interactive object.\n\n<img width="100%" height="100%" style="max-width: 441px"\nsrc="images/how-to/coarse-pointer-en.gif">\n</img>\n\nThat is, if an element is within the `opt.pointerSize` radius of the mouse or touch position, the closest intersected element is considered the interactive object.\n\n## Performance\n\nAs for the implementation, we first judge the intersection between the mouse or touch position and the AABB bounding box of all interactive elements, so as to quickly eliminate most of the elements that is not intersecting. Then, we perform an accurate path intersection judgment on the remaining elements. Therefore, from the perspective of user experience, there is hardly any perceivable performance loss.\n\nFor chart series with large-scale data (that is, bar charts, scatter charts, etc. with `large: true` enabled), the snapping will not be enabled.\n'}}]);
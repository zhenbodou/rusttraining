// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="ch00-introduction.html">简介</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">第一部分 — 基础</li><li class="chapter-item expanded "><a href="ch01-introduction-and-motivation.html"><strong aria-hidden="true">1.</strong> 1. 简介和动机</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch01-1-why-c-cpp-developers-need-rust.html"><strong aria-hidden="true">1.1.</strong> 为什么 C/C++ 开发者需要 Rust</a></li></ol></li><li class="chapter-item expanded "><a href="ch02-getting-started.html"><strong aria-hidden="true">2.</strong> 2. 入门</a></li><li class="chapter-item expanded "><a href="ch03-built-in-types.html"><strong aria-hidden="true">3.</strong> 3. 内置类型</a></li><li class="chapter-item expanded "><a href="ch04-control-flow.html"><strong aria-hidden="true">4.</strong> 4. 控制流</a></li><li class="chapter-item expanded "><a href="ch05-data-structures.html"><strong aria-hidden="true">5.</strong> 5. 数据结构</a></li><li class="chapter-item expanded "><a href="ch06-enums-and-pattern-matching.html"><strong aria-hidden="true">6.</strong> 6. enum 和模式匹配</a></li><li class="chapter-item expanded "><a href="ch07-ownership-and-borrowing.html"><strong aria-hidden="true">7.</strong> 7. ownership 和 borrowing</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch07-1-lifetimes-and-borrowing-deep-dive.html"><strong aria-hidden="true">7.1.</strong> 生命周期和 borrowing 深入探讨</a></li><li class="chapter-item expanded "><a href="ch07-2-smart-pointers-and-interior-mutability.html"><strong aria-hidden="true">7.2.</strong> 智能指针和内部可变性</a></li></ol></li><li class="chapter-item expanded "><a href="ch08-crates-and-modules.html"><strong aria-hidden="true">8.</strong> 8. crate 和模块</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch08-1-testing-patterns.html"><strong aria-hidden="true">8.1.</strong> 测试模式</a></li></ol></li><li class="chapter-item expanded "><a href="ch09-error-handling.html"><strong aria-hidden="true">9.</strong> 9. 错误处理</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch09-1-error-handling-best-practices.html"><strong aria-hidden="true">9.1.</strong> 错误处理最佳实践</a></li></ol></li><li class="chapter-item expanded "><a href="ch10-traits.html"><strong aria-hidden="true">10.</strong> 10. trait</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch10-1-generics.html"><strong aria-hidden="true">10.1.</strong> 泛型</a></li></ol></li><li class="chapter-item expanded "><a href="ch11-from-and-into-traits.html"><strong aria-hidden="true">11.</strong> 11. From 和 Into trait</a></li><li class="chapter-item expanded "><a href="ch12-closures.html"><strong aria-hidden="true">12.</strong> 12. 闭包</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch12-1-iterator-power-tools.html"><strong aria-hidden="true">12.1.</strong> 迭代器强大工具</a></li></ol></li><li class="chapter-item expanded "><a href="ch13-concurrency.html"><strong aria-hidden="true">13.</strong> 13. 并发</a></li><li class="chapter-item expanded "><a href="ch14-unsafe-rust-and-ffi.html"><strong aria-hidden="true">14.</strong> 14. unsafe Rust 和 FFI</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">第二部分 — 深入探讨</li><li class="chapter-item expanded "><a href="ch15-no_std-rust-without-the-standard-library.html"><strong aria-hidden="true">15.</strong> 15. no_std — 没有标准库的 Rust</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch15-1-embedded-deep-dive.html"><strong aria-hidden="true">15.1.</strong> 嵌入式深入探讨</a></li></ol></li><li class="chapter-item expanded "><a href="ch16-case-studies.html"><strong aria-hidden="true">16.</strong> 16. 案例研究：真实的 C++ 到 Rust 转换</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch16-1-case-study-lifetime-borrowing.html"><strong aria-hidden="true">16.1.</strong> 案例研究 — 生命周期借用</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">第三部分 — 最佳实践和参考</li><li class="chapter-item expanded "><a href="ch17-best-practices.html"><strong aria-hidden="true">17.</strong> 17. 最佳实践</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch17-1-avoiding-excessive-clone.html"><strong aria-hidden="true">17.1.</strong> 避免过度使用 clone()</a></li><li class="chapter-item expanded "><a href="ch17-2-avoiding-unchecked-indexing.html"><strong aria-hidden="true">17.2.</strong> 避免未检查的索引访问</a></li><li class="chapter-item expanded "><a href="ch17-3-collapsing-assignment-pyramids.html"><strong aria-hidden="true">17.3.</strong> 消除赋值金字塔</a></li><li class="chapter-item expanded "><a href="ch17-4-logging-and-tracing-ecosystem.html"><strong aria-hidden="true">17.4.</strong> 日志记录和追踪生态系统</a></li></ol></li><li class="chapter-item expanded "><a href="ch18-cpp-rust-semantic-deep-dives.html"><strong aria-hidden="true">18.</strong> 18. C++ → Rust 语义深入探讨</a></li><li class="chapter-item expanded "><a href="ch19-macros.html"><strong aria-hidden="true">19.</strong> 19. Rust 宏：从预处理器到元编程</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);

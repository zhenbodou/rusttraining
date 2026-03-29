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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="ch00-introduction.html">简介</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">第一部分 — 基础</li><li class="chapter-item expanded "><a href="ch01-introduction-and-motivation.html"><strong aria-hidden="true">1.</strong> 1. 介绍与动机</a></li><li class="chapter-item expanded "><a href="ch02-getting-started.html"><strong aria-hidden="true">2.</strong> 2. 入门</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch02-1-essential-keywords-reference.html"><strong aria-hidden="true">2.1.</strong> 必备关键词参考 （可选）</a></li></ol></li><li class="chapter-item expanded "><a href="ch03-built-in-types-and-variables.html"><strong aria-hidden="true">3.</strong> 3. 内置类型与变量</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch03-1-true-immutability-vs-record-illusions.html"><strong aria-hidden="true">3.1.</strong> 真正的不可变性与 Record 的假象</a></li></ol></li><li class="chapter-item expanded "><a href="ch04-control-flow.html"><strong aria-hidden="true">4.</strong> 4. 控制流</a></li><li class="chapter-item expanded "><a href="ch05-data-structures-and-collections.html"><strong aria-hidden="true">5.</strong> 5. 数据结构与集合</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch05-1-constructor-patterns.html"><strong aria-hidden="true">5.1.</strong> 构造函数模式</a></li><li class="chapter-item expanded "><a href="ch05-2-collections-vec-hashmap-and-iterators.html"><strong aria-hidden="true">5.2.</strong> 集合 — Vec、HashMap 与迭代器</a></li></ol></li><li class="chapter-item expanded "><a href="ch06-enums-and-pattern-matching.html"><strong aria-hidden="true">6.</strong> 6. Enum 与模式匹配</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch06-1-exhaustive-matching-and-null-safety.html"><strong aria-hidden="true">6.1.</strong> 穷尽匹配与空值安全</a></li></ol></li><li class="chapter-item expanded "><a href="ch07-ownership-and-borrowing.html"><strong aria-hidden="true">7.</strong> 7. 所有权与借用</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch07-1-memory-safety-deep-dive.html"><strong aria-hidden="true">7.1.</strong> 内存安全深入</a></li><li class="chapter-item expanded "><a href="ch07-2-lifetimes-deep-dive.html"><strong aria-hidden="true">7.2.</strong> 生命周期深入</a></li><li class="chapter-item expanded "><a href="ch07-3-smart-pointers-beyond-single-ownership.html"><strong aria-hidden="true">7.3.</strong> 智能指针 — 超越单一所有权</a></li></ol></li><li class="chapter-item expanded "><a href="ch08-crates-and-modules.html"><strong aria-hidden="true">8.</strong> 8. Crate 与模块</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch08-1-package-management-cargo-vs-nuget.html"><strong aria-hidden="true">8.1.</strong> 包管理 — Cargo vs NuGet</a></li></ol></li><li class="chapter-item expanded "><a href="ch09-error-handling.html"><strong aria-hidden="true">9.</strong> 9. 错误处理</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch09-1-crate-level-error-types-and-result-alias.html"><strong aria-hidden="true">9.1.</strong> Crate 级错误类型与 Result 别名</a></li></ol></li><li class="chapter-item expanded "><a href="ch10-traits-and-generics.html"><strong aria-hidden="true">10.</strong> 10. Trait 与泛型</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch10-1-generic-constraints.html"><strong aria-hidden="true">10.1.</strong> 泛型约束</a></li><li class="chapter-item expanded "><a href="ch10-2-inheritance-vs-composition.html"><strong aria-hidden="true">10.2.</strong> 继承 vs 组合</a></li></ol></li><li class="chapter-item expanded "><a href="ch11-from-and-into-traits.html"><strong aria-hidden="true">11.</strong> 11. From 与 Into Trait</a></li><li class="chapter-item expanded "><a href="ch12-closures-and-iterators.html"><strong aria-hidden="true">12.</strong> 12. 闭包与迭代器</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch12-1-macros-primer.html"><strong aria-hidden="true">12.1.</strong> 宏入门</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">第二部分 — 并发与系统</li><li class="chapter-item expanded "><a href="ch13-concurrency.html"><strong aria-hidden="true">13.</strong> 13. 并发</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch13-1-asyncawait-deep-dive.html"><strong aria-hidden="true">13.1.</strong> Async/Await 深入</a></li></ol></li><li class="chapter-item expanded "><a href="ch14-unsafe-rust-and-ffi.html"><strong aria-hidden="true">14.</strong> 14. Unsafe Rust 与 FFI</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch14-1-testing.html"><strong aria-hidden="true">14.1.</strong> 测试</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">第三部分 — 迁移与最佳实践</li><li class="chapter-item expanded "><a href="ch15-migration-patterns-and-case-studies.html"><strong aria-hidden="true">15.</strong> 15. 迁移模式与案例研究</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch15-1-essential-crates-for-c-developers.html"><strong aria-hidden="true">15.1.</strong> C# 开发者必备 Crate</a></li><li class="chapter-item expanded "><a href="ch15-2-incremental-adoption-strategy.html"><strong aria-hidden="true">15.2.</strong> 渐进式采用策略</a></li></ol></li><li class="chapter-item expanded "><a href="ch16-best-practices.html"><strong aria-hidden="true">16.</strong> 16. 最佳实践</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch16-1-performance-comparison-and-migration.html"><strong aria-hidden="true">16.1.</strong> 性能对比与迁移</a></li><li class="chapter-item expanded "><a href="ch16-2-learning-path-and-resources.html"><strong aria-hidden="true">16.2.</strong> 学习路径与资源</a></li><li class="chapter-item expanded "><a href="ch16-3-rust-tooling-ecosystem.html"><strong aria-hidden="true">16.3.</strong> Rust 工具链生态系统</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">综合项目</li><li class="chapter-item expanded "><a href="ch17-capstone-project.html"><strong aria-hidden="true">17.</strong> 17. 综合项目：构建 CLI 天气工具</a></li></ol>';
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

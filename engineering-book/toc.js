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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="ch00-introduction.html">简介</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">第一部分 — 构建与发布</li><li class="chapter-item expanded "><a href="ch01-build-scripts-buildrs-in-depth.html"><strong aria-hidden="true">1.</strong> 1. 构建脚本 — build.rs 深入解析</a></li><li class="chapter-item expanded "><a href="ch02-cross-compilation-one-source-many-target.html"><strong aria-hidden="true">2.</strong> 2. 交叉编译 — 一份源码，多个目标</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">第二部分 — 度量与验证</li><li class="chapter-item expanded "><a href="ch03-benchmarking-measuring-what-matters.html"><strong aria-hidden="true">3.</strong> 3. 基准测试 — 度量关键指标</a></li><li class="chapter-item expanded "><a href="ch04-code-coverage-seeing-what-tests-miss.html"><strong aria-hidden="true">4.</strong> 4. 代码覆盖率 — 发现测试遗漏</a></li><li class="chapter-item expanded "><a href="ch05-miri-valgrind-and-sanitizers-verifying-u.html"><strong aria-hidden="true">5.</strong> 5. Miri、Valgrind 和 Sanitizers — 验证 unsafe 代码</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">第三部分 — 加固与优化</li><li class="chapter-item expanded "><a href="ch06-dependency-management-and-supply-chain-s.html"><strong aria-hidden="true">6.</strong> 6. 依赖管理和供应链安全</a></li><li class="chapter-item expanded "><a href="ch07-release-profiles-and-binary-size.html"><strong aria-hidden="true">7.</strong> 7. Release Profile 和二进制大小</a></li><li class="chapter-item expanded "><a href="ch08-compile-time-and-developer-tools.html"><strong aria-hidden="true">8.</strong> 8. 编译时和开发者工具</a></li><li class="chapter-item expanded "><a href="ch09-no-std-and-feature-verification.html"><strong aria-hidden="true">9.</strong> 9. no_std 和特性验证</a></li><li class="chapter-item expanded "><a href="ch10-windows-and-conditional-compilation.html"><strong aria-hidden="true">10.</strong> 10. Windows 和条件编译</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">第四部分 — 集成</li><li class="chapter-item expanded "><a href="ch11-putting-it-all-together-a-production-cic.html"><strong aria-hidden="true">11.</strong> 11. 整合一切 — 生产级 CI/CD 流水线</a></li><li class="chapter-item expanded "><a href="ch12-tricks-from-the-trenches.html"><strong aria-hidden="true">12.</strong> 12. 实战技巧</a></li><li class="chapter-item expanded "><a href="ch13-quick-reference-card.html"><strong aria-hidden="true">13.</strong> 13. 快速参考卡</a></li></ol>';
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

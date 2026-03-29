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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="ch00-introduction.html">引言</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">第一部分 — 基础</li><li class="chapter-item expanded "><a href="ch01-the-philosophy-why-types-beat-tests.html"><strong aria-hidden="true">1.</strong> 1. 理念 — 为什么类型优于测试</a></li><li class="chapter-item expanded affix "><li class="part-title">第二部分 — 核心模式</li><li class="chapter-item expanded "><a href="ch02-typed-command-interfaces-request-determi.html"><strong aria-hidden="true">2.</strong> 2. 类型化命令接口 — 请求决定响应</a></li><li class="chapter-item expanded "><a href="ch03-single-use-types-cryptographic-guarantee.html"><strong aria-hidden="true">3.</strong> 3. 单次使用类型 — 通过所有权实现加密级保证</a></li><li class="chapter-item expanded "><a href="ch04-capability-tokens-zero-cost-proof-of-aut.html"><strong aria-hidden="true">4.</strong> 4. Capability 令牌 — 零成本的权限证明</a></li><li class="chapter-item expanded "><a href="ch05-protocol-state-machines-type-state-for-r.html"><strong aria-hidden="true">5.</strong> 5. 协议状态机 — 针对真实硬件的 Type-State</a></li><li class="chapter-item expanded "><a href="ch06-dimensional-analysis-making-the-compiler.html"><strong aria-hidden="true">6.</strong> 6. 量纲分析 — 让编译器检查你的单位</a></li><li class="chapter-item expanded "><a href="ch07-validated-boundaries-parse-dont-validate.html"><strong aria-hidden="true">7.</strong> 7. 验证边界 — 解析而非验证</a></li><li class="chapter-item expanded "><a href="ch08-capability-mixins-compile-time-hardware-.html"><strong aria-hidden="true">8.</strong> 8. Capability 混入 — 编译时硬件契约</a></li><li class="chapter-item expanded "><a href="ch09-phantom-types-for-resource-tracking.html"><strong aria-hidden="true">9.</strong> 9. 用于资源跟踪的 Phantom 类型</a></li><li class="chapter-item expanded "><a href="ch15-const-fn-compile-time-correctness-proofs.html"><strong aria-hidden="true">10.</strong> 10. Const Fn — 编译时正确性证明</a></li><li class="chapter-item expanded "><a href="ch16-send-sync-compile-time-concurrency-proofs.html"><strong aria-hidden="true">11.</strong> 11. Send &amp; Sync — 编译时并发证明</a></li><li class="chapter-item expanded affix "><li class="part-title">第三部分 — 集成与实践</li><li class="chapter-item expanded "><a href="ch10-putting-it-all-together-a-complete-diagn.html"><strong aria-hidden="true">12.</strong> 12. 综合应用 — 完整的诊断平台</a></li><li class="chapter-item expanded "><a href="ch17-redfish-applied-walkthrough.html"><strong aria-hidden="true">13.</strong> 13. 应用演练 — 类型安全的 Redfish 客户端</a></li><li class="chapter-item expanded "><a href="ch18-redfish-server-walkthrough.html"><strong aria-hidden="true">14.</strong> 14. 应用演练 — 类型安全的 Redfish 服务器</a></li><li class="chapter-item expanded "><a href="ch11-fourteen-tricks-from-the-trenches.html"><strong aria-hidden="true">15.</strong> 15. 来自实践领域的十四个技巧</a></li><li class="chapter-item expanded "><a href="ch12-exercises.html"><strong aria-hidden="true">16.</strong> 16. 练习</a></li><li class="chapter-item expanded affix "><li class="part-title">第四部分 — 参考</li><li class="chapter-item expanded "><a href="ch13-reference-card.html"><strong aria-hidden="true">17.</strong> 17. 参考卡片</a></li><li class="chapter-item expanded "><a href="ch14-testing-type-level-guarantees.html"><strong aria-hidden="true">18.</strong> 18. 测试类型级保证</a></li></ol>';
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

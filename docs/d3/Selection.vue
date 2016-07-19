<template>
    <pre class="brush: javascript;">
       //三份数据
    let a0 = [{"id" : "GAN", "name": "甘焕"}, {"id" : "ZH", "name": "张棣"}, {"id" : "XUE", "name": "张雪梅"}, {"id" : "TEST"}]
    let a1 = [{"id" : "GAN", "name": "甘焕"}, {"id" : "XU", "name": "徐建辉"}, {"id" : "XUE", "name": "张雪梅"}, {"id" : "TEST"}]
    let a2 = [{"id" : "GAN", "name": "甘焕"}, {"id" : "BAI", "name": "白权威"}, {"id" : "ZH", "name": "张棣"}, {"id" : "TEST"}]
    </pre>

    <section>
        <header class="page-header">
            <h3>数据驱动编程 <button class="btn btn-primary btn-sm" @click="addItems" style="float:right;">添加数据</button></h3>
        </header>
        <div class="row">
            <div class="col-xs-6">
                <div class="list-group" id="group1"></div>
            </div>
            <div class="col-xs-6">
                <pre class="brush: javascript;">
                   var group1 = document.getElementById('group1')
                   // 循环添加节点
                   for(var i = 0; i < a0.length - 1; i++) {
                        var el = document.createElement('a')
                        el.href = 'javascript:;'
                        el.textContent = a0[i].name
                        el.classList.add("list-group-item")
                        el.addEventListener("click", () => alert(a0[i].id))
                        group1.appendChild(el)
                   }
                </pre>
            </div>
        </div>
    </section>

    <section>
        <header class="page-header">
            <h3>DOM操作 <button class="btn btn-primary btn-sm" @click="append" style="float:right;">添加子节点</button></h3>
        </header>
        <div class="row">
            <div class="col-xs-6">
                <div class="list-group" id="group2"></div>
            </div>
            <div class="col-xs-6">
                <pre class="brush: javascript;">
                    //  这时候指向到a元素,创建与选择合二为一
                    //  级联选择，选择之间的父子关系
                    let link = d3.select('#group2').insert('a').text(a0[i].name).on('click', function() {
                        alert(a0[i].id)
                    })
                    //  注意classed函数的返回值
                    link.classed("list-group-item", true)
                </pre>
            </div>
        </div>
    </section>

    <section>
        <header class="page-header">
            <h3>Datum <button class="btn btn-primary btn-sm" @click="datum" style="float:right;">添加子节点</button></h3>
        </header>
        <div class="row">
            <div class="col-xs-6">
                <div class="list-group" id="group3"></div>
            </div>
            <div class="col-xs-6">
                <pre class="brush: javascript;">
                 //  选择的层次性
                let update = d3.select('#group4').selectAll("a.list-group-item").data(a0, d => !!d? d.id : this.id)
                //  多次集合运算
                let newItems = update.enter()
                        .data(a2, d => !!d? d.id : this.id)
                        .append("a").text(d =>d.name).attr("href", 'javascript:;').on("click", d => alert(d.id)).classed('list-group-item', true)

                </pre>
            </div>
        </div>
    </section>

    <section>
        <header class="page-header">
            <h3>Datum <button class="btn btn-primary btn-sm" @click="create" style="float:right;">新增</button></h3>
        </header>
        <div class="row">
            <div class="col-xs-6">
                <div class="list-group" id="group4"></div>
            </div>
            <div class="col-xs-6">
                <pre class="brush: javascript;">
                let group3 = d3.select('#group3').datum(a0)
                //  data与datum获取值也有显著的差异
                for(let i = 0; i < group3.datum().length - 1; i++) {
                    group3.insert('a').text(function(d) {
                        return d[i].name
                    }).on('click', d => alert(d.id))
                }
                </pre>
            </div>
        </div>
    </section>


</template>
<style>
    .page-header {
        margin-top: 15px;
        padding-bottom: 5px;
        margin-bottom: 10px;
    }
</style>
<script>
    let a0 = [{"id" : "GAN", "name": "甘焕"}, {"id" : "ZH", "name": "张棣"}, {"id" : "XUE", "name": "张雪梅"}, {"id" : "TEST"}]
    let a1 = [{"id" : "GAN", "name": "甘焕"}, {"id" : "XU", "name": "徐建辉"}, {"id" : "XUE", "name": "张雪梅"}, {"id" : "TEST"}]
    let a2 = [{"id" : "GAN", "name": "甘焕"}, {"id" : "BAI", "name": "白权威"}, {"id" : "ZH", "name": "张棣"}, {"id" : "TEST"}]
    let d3 = require('d3')
    export default {

        ready () {
            syntaxhighlighter.default.highlight()
        },

        methods: {

            /**
             * 存在的问题，解决的三种办法
             * 段作用域、函数、对象
             */
            addItems () {
                var group1 = document.getElementById('group1')
                //  段作用域、函数作用域、全局作用域
                for(var i = 0; i < a0.length - 1; i++) {
                    var el = document.createElement('a')
                    el.href = 'javascript:;'
                    el.textContent = a0[i].name
                    el.classList.add('list-group-item')
                    el.addEventListener('click', () => alert(a0[i].id))
                    group1.appendChild(el)
                }
            },

            /**
             * 通过d3来解决问题
             * append与insert本没有什么区别，insert可指定位置插入
             */
            append () {
                for(let i = 0; i < a0.length - 1; i++) {
                    //  这时候指向到a元素,创建与选择合二为一
                    let link = d3.select('#group2').insert('a').text(a0[i].name).on('click', function() {
                        alert(a0[i].id)
                    }).attr('href', 'javascript:;')
                    //  注意classed函数的返回值
                    link.classed("list-group-item", true)
                }
            },

            /**
             * 不会有集合运算
             * 注意值的获取的差异性，换成data试试
             */
            datum () {
                let group3 = d3.select('#group3').datum(a0)
                //  data与datum获取值也有显著的差异
                for(let i = 0; i < group3.datum().length - 1; i++) {
                    group3.insert('a').text(function(d) {
                        return d[i].name
                    }).on('click',d => alert(d[i].id)).attr('href', 'javascript:;').classed("list-group-item", true)
                }
            },

            /**
             *
             */
            create () {
                //  选择的层次性
                let update = d3.select('#group4').selectAll("a.list-group-item").data(a0, d => !!d? d.id : this.id)
                //  多次集合运算
                let newItems = update.enter()
                        .data(a2, d => !!d? d.id : this.id)
                                      .append("a").text(d =>d.name).attr("href", 'javascript:;').on("click", d => alert(d.id)).classed('list-group-item', true)
            }
        }
    }
</script>
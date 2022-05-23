import * as ko from "knockout";

import "./filter-select.scss";

import { IFindLogic } from "../find";

var selectboxFilterTemplate = require("text-loader!./filter-select.html");


    ko.components.register("abris-select-filter", {
        viewModel: {
            createViewModel: function(params, componentInfo) {
                // var $element = $(componentInfo.element);
                var pageSize = 15;
                var value = params.value;
                // var viewModel = params.viewModel;
                // var dataSource = new PhpDataSource(null);
                value([]);
                
                // var $select = $element.find("select")["select2"]({
                //     minimumResultsForSearch: 10,
                //     language: "ru",
                //     placeholder: "*",
                //     allowClear: true,
                //     ajax: {
                //         dataType: "json",
                //         delay: 250,
                //         data: params => {
                //             return {
                //                 page: params.page
                //             };
                //         },
                //         transport: (par, success, failure) => {
                //             var propArray = params.propertyName();
                //             var entity = params.entity;
                //             for(var i = 0; i < propArray.length - 1; i++) {
                //                 var model = ModelProvider.getProjection(entity); 
                //                 if(model.properties[propArray[i]])
                //                     entity = ModelProvider.getProjection(model.properties[propArray[i]].relation.entity).table;
                //                 if(model.relations[propArray[i]])
                //                     entity = ModelProvider.getProjection(propArray[i]).table;
                //             }
                //             var entityInfo = ModelProvider.getProjection(entity);
                //             var propertyName = propArray[propArray.length - 1];
                //             if(par.data.page === undefined) {
                //                 par.data.page = 1;
                //             }
                //             if(entityInfo.properties[propertyName].type === "bool") {
                //                success({items: [{id: "f", text: Localization.getString("no")}, {id: "t", text: Localization.getString("yes")}], total_count: 2}); 
                //             }
                //             else {
                //                 let findLogic: IFindLogic = _getFindLogic(viewModel.filterValue().filter(i => i.propertyName != propertyName && (i.operation !== "EQ" || i.operation !== "NEQ")).concat(viewModel.hiddenFilterValue()).concat(viewModel.additionalProperties()), viewModel.columns, viewModel.projection, viewModel.foreignKey, viewModel.linkId, true);
                //                 viewModel.dataSource.getTableDataFindLogic(viewModel.projectionName, findLogic,
                //                     data => {
                //                         var values:Array<any> = (ko.unwrap(data.data) || []).map((item) => {
                //                             let val = ko.unwrap(item[propertyName]);
                //                             if (val && typeof(val) === "object") {
                //                                 return {id: val.value, text: val.value};
                //                             }
                //                             else { 
                //                                 return {id: val, text: val};
                //                             }
                //                         });
                //                         success({items: values, total_count: data.records[0].count});
                //                     },
                //                     pageSize, (par.data.page - 1) * pageSize, null, [{field: propertyName, distinct: true}], null,  null
                //                   );
                //             }
                //         },
                //         processResults: (data, params) => {
                //             params.page = params.page || 1;
                //             return {
                //                 results: data.items,
                //                 pagination: {
                //                     more: (params.page * pageSize) < data.total_count
                //                 }
                //             };
                //         },
                //         cache: true
                //     }
                // }).on("select2:select", (e) => {
                //     value($(e.target).val());
                // }).on("select2:unselect", (e) => {
                //     value($(e.target).val());
                // })/*.on("select2:open", (e) => {
                //     $select.data("select2").$dropdown.addClass("select2-container-data-table");
                // });*/


                // // Trigger search
                // $select.on('keydown', function(e) {
                //     var $select = $(this), $select2 = $select.data('select2'), $container = $select2.$container;

                //     // Unprintable keys
                //     if(typeof e.which === 'undefined' || $.inArray(e.which, [0, 8, 9, 12, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 44, 45, 46, 91, 92, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, 124, 144, 145, 224, 225, 57392, 63289]) >= 0) {
                //         return true;
                //     }

                //     $container.addClass("select2-container-data-table");

                //     // Already opened
                //     if($container.hasClass('select2-container--open')) {
                //         return true;
                //     }

                //     $select["select2"]('open');

                //     // Default search value
                //     var $search = $select2.dropdown.$search || $select2.selection.$search, query = $.inArray(e.which, [13, 40, 108]) < 0 ? String.fromCharCode(e.which) : '';
                //     if(query !== '') {
                //         $search.val(query).trigger('keyup');
                //     }
                // });

                // // Format, placeholder
                // $select.on('select2:open', function(e) {
                //     var $select = $(this), $select2 = $select.data('select2'), $dropdown = $select2.dropdown.$dropdown || $select2.selection.$dropdown, $search = $select2.dropdown.$search || $select2.selection.$search, data = $select["select2"]('data');

                //     // Above dropdown
                //     if($dropdown.hasClass('select2-dropdown--above')) {
                //         $dropdown.append($search.parents('.select2-search--dropdown').detach());
                //     }

                //     // Placeholder
                //     $search.attr('placeholder', ((data.length && data[0].text !== '') ? data[0].text : $select.data('placeholder')));
                // });

            }
        },
        template: selectboxFilterTemplate
    });

   export var AbrisSelectboxFilterWidget;

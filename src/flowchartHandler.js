/* eslint-disable prefer-destructuring */
import Flowchart from './flowchart_class';

export default class FlowchartHandler {
  /** @ngInject */
  constructor($scope, elem, ctrl, data) {
    u.log(1, 'FlowchartHandler.constructor()');
    u.log(0, 'FlowchartHandler.constructor() data', data);
    this.$scope = $scope || null;
    this.$elem = elem.find('.flowchart-panel__chart');
    this.ctrl = ctrl;
    this.flowcharts = [];
    this.data = data;
    this.changeSourceFlag = true;
    this.changeOptionFlag = true;
    this.changeDataFlag = true;
    this.changedRuleFlag = true;
    this.defaultXml = '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';
      
    // '<mxGraphModel dx="1073" dy="521" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="0" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="arrow-1" style="edgeStyle=orthogonalEdgeStyle;rounded=0;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;jettySize=auto;orthogonalLoop=1;strokeWidth=4;shadow=1;" parent="1" source="shape-grafana" target="shape-love" edge="1"><mxGeometry relative="1" as="geometry"/></mxCell><object label="Grafana" href="www.google.fr" id="shape-grafana"><mxCell style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d79b00;shadow=1;" parent="1" vertex="1"><mxGeometry x="10" y="10" width="120" height="60" as="geometry"/></mxCell></object><mxCell id="arrow-2" style="edgeStyle=orthogonalEdgeStyle;rounded=0;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;jettySize=auto;orthogonalLoop=1;strokeWidth=4;shadow=1;" parent="1" source="shape-love" target="shape-mxgraph" edge="1"><mxGeometry relative="1" as="geometry"/></mxCell><mxCell id="shape-love" value="loves" style="triangle;whiteSpace=wrap;html=1;fillColor=#e1d5e7;strokeColor=#9673a6;shadow=1;" parent="1" vertex="1"><mxGeometry x="210" width="60" height="80" as="geometry"/></mxCell><mxCell id="shape-mxgraph" value="mxGraph" style="ellipse;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;shadow=1;" parent="1" vertex="1"><mxGeometry x="340" width="120" height="80" as="geometry"/></mxCell><mxCell id="text-grafana" value="MyText : TextVal" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="1" vertex="1"><mxGeometry x="9" y="50" width="120" height="20" as="geometry"/></mxCell><mxCell id="text-arrow1" value="Text 2" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="1" vertex="1"><mxGeometry x="150" y="20" width="40" height="20" as="geometry"/></mxCell><mxCell id="text-arrow2" value="Text 3" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="1" vertex="1"><mxGeometry x="280" y="20" width="40" height="20" as="geometry"/></mxCell><mxCell id="text-mxgraph" value="Text 4" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="1" vertex="1"><mxGeometry x="380" y="50" width="40" height="20" as="geometry"/></mxCell></root></mxGraphModel>';

    this.xgraph = undefined;
    this.$container = undefined;
    this.onMapping = {
      active: false, // boolean if pointer mapping is active
      object: undefined, // ojb to return id of mapping
      id: undefined, // id of dom
    };

    this.import(this.data);

    // Events Render
    ctrl.events.on('render', () => {
      this.render();
    });
  }

  import(obj) {
    u.log(1, 'FlowchartHandler.import()');
    u.log(0, 'FlowchartHandler.import() obj', obj);
    this.flowcharts = [];
    if (obj !== undefined && obj !== null && obj.length > 0) {
      obj.forEach((map) => {
        const container = this.createContainer();
        const newData = {};
        const fc = new Flowchart(map.name, map.xml, container, newData);
        fc.import(map);
        this.flowcharts.push(fc);
        this.data.push(newData);
      });
    }
  }

  getFlowchart(index) {
    return this.flowcharts[index];
  }

  getFlowcharts() {
    return this.flowcharts;
  }

  countFlowcharts() {
    if (this.flowcharts !== undefined && Array.isArray(this.flowcharts)) return this.flowcharts.length;
    return 0;
  }

  createContainer() {
    const $container = $(
      `<div id="flowchart_${
        u.uniqueID
      }" style="margin:auto;position:relative,width:100%;height:100%"></div>`
    );
    this.$elem.html($container);
    return $container[0];
  }

  addFlowchart(name) {
    u.log(1, 'FlowchartHandler.addFlowchart()');
    const container = this.createContainer();
    const data = {};
    const flowchart = new Flowchart(name, this.defaultXml, container, data);
    this.data.push(data);
    this.flowcharts.push(flowchart);
  }

  render() {
    u.log(1, 'flowchartHandler.render()');
    if (this.changeSourceFlag) {
      this.draw();
      this.changeSourceFlag = false;
      this.changeRuleFlag = true;
    }
    if (this.changeOptionFlag) {
      this.setOptions();
      this.changeOptionFlag = false;
    }
    if (this.changeRuleFlag || this.changeDataFlag) {
      this.setStates();
      this.applyStates();
      this.changeRuleFlag = false;
      this.changeDataFlag = false;
    }
    const width = this.$elem.width();
    const height = this.ctrl.height;
    this.refresh(width, height);
  }

  sourceChanged() {
    this.changeSourceFlag = true;
  }

  optionChanged() {
    this.changeOptionFlag = true;
  }

  ruleChanged() {
    this.changeRuleFlag = true;
  }

  dataChanged() {
    this.changeDataFlag = true;
  }

  refresh(width, height) {
    u.log(1, `FlowchartHandler.refresh()`);
    this.flowcharts.forEach((flowchart) => {
      flowchart.refresh(width, height);
    });
  }

  setStates() {
    const rules = this.ctrl.rulesHandler.getRules();
    const series = this.ctrl.series;
    this.flowcharts.forEach((flowchart) => {
      flowchart.setStates(rules, series);
    });
  }

  applyStates() {
    this.flowcharts.forEach((flowchart) => {
      flowchart.applyStates();
    });
  }

  setOptions() {
    this.flowcharts.forEach((flowchart) => {
      flowchart.setScale(flowchart.data.scale);
      flowchart.setCenter(flowchart.data.center);
      flowchart.setGrid(flowchart.data.grid);
      flowchart.setTooltip(flowchart.data.tooltip);
      flowchart.setLock(flowchart.data.lock);
      flowchart.setZoom(flowchart.data.zoom);
    });
  }

  draw() {
    u.log(1, `FlowchartHandler.draw()`);
    this.flowcharts.forEach((flowchart) => {
      flowchart.redraw();
    });
  }

  setMap(objToMap) {
    const flowchart = this.getFlowchart(0);
    this.onMapping.active = true;
    this.onMapping.object = objToMap;
    this.onMapping.id = objToMap.getId();
    this.onMapping.$scope = this.$scope;
    flowchart.setMap(this.onMapping);
  }

  unsetMap() {
    const flowchart = this.getFlowchart(0);
    this.onMapping.active = false;
    this.onMapping.object = undefined;
    this.onMapping.id = '';
    flowchart.unsetMap();
  }

  isMapping(objToMap) {
    if (objToMap === undefined || objToMap == null) return this.onMapping.active;
    if (this.onMapping.active === true && objToMap === this.onMapping.object) return true;
    return false;
  }

  openDrawEditor(index) {
    const urlEditor = 'https://draw.io?embed=1';
    const editorWindow = window.open(urlEditor, 'MxGraph Editor', 'width=1280, height=720');
    window.addEventListener('message', (event) => {
      if (event.origin !== 'https://www.draw.io') return;
      // when editor is open
      if (event.data === 'ready') {
        // send xml
        event.source.postMessage(this.flowcharts[index].data.xml, event.origin);
      } else {
        if (event.data !== undefined && event.data.length > 0) {
          // this.flowcharts[index].setXml(event.data);
          this.flowcharts[index].redraw(event.data);
          this.sourceChanged();
          this.$scope.$apply();
          // this.render();
        }
        if (event.data !== undefined || event.data.length === 0) {
          editorWindow.close();
        }
      }
    });
  }
}

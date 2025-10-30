import { useMemo } from 'react'
import ReactFlow, { Background } from 'reactflow'
import 'reactflow/dist/style.css'
import './JsonTree.css'

export default function JsonTree({ data, searchTerm }) {
  const { nodes, edges } = useMemo(() => {
    if (!data || typeof data !== 'object') return { nodes: [], edges: [] }

    const nodes = []
    const edges = []
    let id = 1
    const lowerSearch = searchTerm?.toLowerCase() || ''

    const makeNode = (key, value, parent = null, depth = 0) => {
      const nodeId = `n-${id++}`
      const isObj = value && typeof value === 'object'
      const isArr = Array.isArray(value)
      const baseLabel = isObj ? `${key} {}` : isArr ? `${key} []` : `${key}: ${String(value)}`
      const isMatch =
        lowerSearch &&
        baseLabel.toLowerCase().includes(lowerSearch)

      const bg = isMatch
        ? 'rgba(129, 255, 11, 0.84)' // highlight
        : isObj
        ? 'var(--node-object-bg)'
        : isArr
        ? 'var(--node-array-bg)'
        : 'var(--node-value-bg)'

      nodes.push({
        id: nodeId,
        data: { label: baseLabel },
        position: { x: depth * 250, y: id * 80 },
        style: {
          background: bg,
          color: 'var(--text)',
          border: '1px solid var(--border)',
          borderRadius: 8,
          padding: '6px 10px',
          width: 180,
          textAlign: 'center',
          fontSize: 13,
          boxShadow: '0 2px 6px var(--shadow)',
          fontWeight: isMatch ? '600' : '400',
        },
      })

      if (parent)
        edges.push({
          id: `e-${parent}-${nodeId}`,
          source: parent,
          target: nodeId,
          type: 'straight',
        })

      if (isObj) Object.entries(value).forEach(([k, v]) => makeNode(k, v, nodeId, depth + 1))
      else if (isArr) value.forEach((v, i) => makeNode(i, v, nodeId, depth + 1))
    }

    makeNode('root', data)
    return { nodes, edges }
  }, [data, searchTerm])

  if (!data) return <div className="tree-empty">No data</div>

  return (
    <div className="tree-flow">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        nodesConnectable={false}
        defaultEdgeOptions={{ type: 'straight' }}
      >
        <Background />
      </ReactFlow>
    </div>
  )
}

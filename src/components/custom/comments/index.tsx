
import React from 'react';
import { useRootStore } from '../../../providers';

import { useObserver } from 'mobx-react';

export default function Comments() {
    const { commentStore } = useRootStore()

    return useObserver(() => (
        <table className="table">
            <tbody>
                {
                    commentStore.comments.map((comment, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {comment}
                                </td>
                            </tr>
                        )

                    })
                }
            </tbody>
        </table>
    )
    )
}